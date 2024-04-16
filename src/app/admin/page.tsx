import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";

async function getSalesData() {
  const data = await db.booking.aggregate({
    _sum: {
      pricePaid: true,
    },
    _count: true
  });

  return {
    amount: data._sum.pricePaid || 0,
    numberOfSales: data._count || 0
  }
}

async function getUserData() {
  const [userCount, bookingData] = await Promise.all([
    db.user.count(),
    db.booking.aggregate({
      _sum: {
        pricePaid: true,
      }
    })
  ]);
  
  return {
    userCount,
    averageValuePerUser: userCount === 0 ? 0 : Number(bookingData._sum.pricePaid || 0) / userCount 
  }
}

export default async function AdminDashboard() {
  const [salesData, userData] = await Promise.all([getSalesData(), getUserData()]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Total Orders"
        subtitle={formatNumber(salesData.numberOfSales) + " orders"}
        body={formatCurrency(Number(salesData.amount)) + " in sales"} // Fix: Convert amount to a number using Number()
      /> 
      <DashboardCard
        title="Customers"
        subtitle={formatCurrency(userData.averageValuePerUser) + " Average Value"}
        body={formatNumber(userData.userCount) + " Total Customers"}
      />    
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
