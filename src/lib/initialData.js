import { url } from "inspector";

const randomUUID = require("crypto").randomUUID;
/*
model Ticket {
  id        String   @id @default(uuid())
  stand     String
  block     String
  price     Int
  stadiumId String
  stadium   Stadium  @relation(fields: [stadiumId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt    
  Booking   Booking? @relation(fields: [bookingId], references: [id], onDelete: NoAction)
  bookingId String?
}
*/
const stadiums = [
  {
    //0
    id: randomUUID(),
    location: "Eden Gardens: Kolkata",
    
  },
  {
    //1
    id: randomUUID(),
    location: "Narendra Modi Stadium: Ahmedabad",
    
  },
  {
    //2
    id: randomUUID(),
    location: "Wankhede Stadium: Mumbai",
    
  },
  {
    //3
    id: randomUUID(),
    location: "Chepauk Stadium: Chennai",
    
  },
  {
    //4
    id: randomUUID(),
    location: "M Chinnaswamy Stadium: Bangalore",
    
  },
  {
    //5
    id: randomUUID(),
    location: "Arun Jaitley Stadium: Delhi",
    
  },
  {
    //6
    id: randomUUID(),
    location: "Uppal Stadium: Hyderabad",
    
  },
  {
    //7
    id: randomUUID(),
    location: "Ekana Stadium: Lucknow",
    
  },
  {
    //8
    id: randomUUID(),
    location: "SMS Stadium: Jaipur",
    
  },
  {
    //9
    id: randomUUID(),
    location: "PCA Stadium: Mohali",
    
  },
  {
    //10
    id: randomUUID(),
    location: "Barsapara Stadium: Guwahati",
    
  },
  {
    //11
    id: randomUUID(),
    location: "HPCA Stadium: Dharamshala",
    
  },
  {
    //12
    id: randomUUID(),
    location: "Vizag Stadium: Visakhapatnam",
    
  },
];
const tickets = [
  // wankhede
  {
    id: randomUUID(),
    name: "GAVASKAR STAND BLK G L1",
    price: 990,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GAVASKAR STAND BLK L L1",
    price: 990,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK F L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK G L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK H L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK I L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK J L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK K L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK L L1",
    price: 2400,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK A L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK B L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK C L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK D L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK E L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK F L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK I L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK J L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK K L3",
    price: 3600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK A L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK B L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK C L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK D L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK A L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK B L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK C L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK D L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK E L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK F L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK G L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK Q L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK R L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK S L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK T L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK U L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK G L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK Q L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK R L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK S L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK T L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK U L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK H L3",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK X L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK Y L1",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK A L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK B L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK C L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK D L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "VIJAY.M STAND BLK E L2",
    price: 4350,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK V L1",
    price: 4600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK W L1",
    price: 4600,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK I L1",
    price: 4950,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK J L1",
    price: 4950,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GARWARE STAND BLK K L1",
    price: 4950,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GRAND STAND L4",
    price: 9200,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK N L2",
    price: 9200,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK O L2",
    price: 9200,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "SACHIN STAND BLK P L2",
    price: 9200,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "GRAND STAND L3",
    price: 1250,
    stadiumId: stadiums[2].id,
  },
  {
    id: randomUUID(),
    name: "DILIP V. STAND BLK L L2",
    price: 1500,
    stadiumId: stadiums[2].id,
  },
  // eden garden
  {
    id: randomUUID(),
    name: "G 1 Block - DREAM 11 PAVL",
    price: 750,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "H 1 Block - JOY PAVILION",
    price: 750,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "B1 Block - BKT TIRES PAVL",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "C1 Block DREAM 11 PAV",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "D 1 Block - LUX COZI PAVL",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "F1 Block - JIO PAVILION",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "K1 block- JIO PAVILION",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "L1 Block - ACKO",
    price: 1000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "D Block - LUX COZI PAVL",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "E Block - BKT TIRES PAVL",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "F Block - JIO PAVILION",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "G Block - DREAM 11 PAVL",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "H Block - JOY PAVILION",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "J Block - JOY PAVILION",
    price: 1500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "C Block DREAM 11 PAVILION",
    price: 2000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "K block - JIO PAVILION",
    price: 2000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "B Block - BKT TIRES PAVL",
    price: 3000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "L Block - ACKO",
    price: 3000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Club House Upper Tier",
    price: 5000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Club House Lower Tier",
    price: 8000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "B PREMIUM BKT TIRES PAVL",
    price: 8500,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav VIP Hosp S-6",
    price: 19000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav VIP Hosp S-7",
    price: 19000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C4",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C5",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C7",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C8",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  {
    id: randomUUID(),
    name: "Knights Pav Corp Hosp C9",
    price: 28000,
    stadiumId: stadiums[0].id,
  },
  // ekana stadium
  {
    id: randomUUID(),
    name: "My11Circle Upper Block 2",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Upper Block 3",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "SBI Life Upper Block 4",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Astral Pipes Upper Block5",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Jio Upper Block 7",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Dangal TV Upper Block 8",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Upper Block 9",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Upper Block 10",
    price: 800,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "BKT Tires Upper Block 1",
    price: 1000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Greenply Upper Block 11",
    price: 1000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Lower Block 2",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Lower Block 3",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "SBI Life Lower Block 4",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Astral Pipes Lower Block5",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Jio Lower Block 7",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Dangal TV Lower Block 8",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Lower Block 9",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "My11Circle Lower Block 10",
    price: 1200,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "BKT Tires Lower Block 1",
    price: 1500,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Greenply Lower Block 11",
    price: 1500,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Gallery A",
    price: 2000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Gallery B",
    price: 2000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Gallery Center",
    price: 2000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South PresidentialGallery",
    price: 3000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Platinum Lawn 1",
    price: 9000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Platinum Lawn 2",
    price: 9000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Premium Lounge",
    price: 10000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "UPCA Lounge",
    price: 12000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Director Lawn 1",
    price: 12000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Director Lawn 2",
    price: 12000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 1",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 2",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 3",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 4",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 5",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 6",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 7",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 8",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 9",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "North Corporate Box 10",
    price: 15000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 8",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 9",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 10",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 11",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 12",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 13",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 14",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 15",
    price: 18000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 1",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 2",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 3",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 4",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 5",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 6",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 7",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 16",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 17",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 18",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 19",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 20",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 21",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "South Corporate Box 22",
    price: 20000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "IPL Lounge",
    price: 22000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Super Giants Lounge A",
    price: 25000,
    stadiumId: stadiums[7].id,
  },
  {
    id: randomUUID(),
    name: "Super Giants Lounge B",
    price: 25000,
    stadiumId: stadiums[7].id,
  },
];
// model StadiumImage {
//   id        String  @id @default(uuid())
//   url       String
//   stadiumId String
//   stadium   Stadium @relation(fields: [stadiumId], references: [id], onDelete: Cascade)
// }
const stadiumImages = [
  {
    id: randomUUID(),
    url: "/stadium_images/arun-jaitley1.jpg",
    stadiumId: stadiums[5].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/arun-jaitley2.png",
    stadiumId: stadiums[5].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/barsapara1.jpg",
    stadiumId: stadiums[10].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/barsapara2.png",
    stadiumId: stadiums[10].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/chidambaram1.jpg",
    stadiumId: stadiums[3].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/chidambaram2.png",
    stadiumId: stadiums[3].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/chinnaswamy1.jpg",
    stadiumId: stadiums[4].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/chinnaswamy2.png",
    stadiumId: stadiums[4].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/dharamshala1.png",
    stadiumId: stadiums[11].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/dharamshala2.png",
    stadiumId: stadiums[11].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/eden-gardens1.jpg",
    stadiumId: stadiums[0].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/eden-gardens2.png",
    stadiumId: stadiums[0].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/ekana-stadium1.jpg",
    stadiumId: stadiums[7].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/ekana-stadium2.jpg",
    stadiumId: stadiums[7].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/narendramodi1.jpg",
    stadiumId: stadiums[1].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/narendramodi2.png",
    stadiumId: stadiums[1].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/pca1.jpeg",
    stadiumId: stadiums[9].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/sms1.png",
    stadiumId: stadiums[8].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/vizag1.jpg",
    stadiumId: stadiums[12].id
  },
  {
    id: randomUUID(),
    url: "/stadium_images/wankhede1.jpg",
    stadiumId: stadiums[2].id
  
  },
  {
    id: randomUUID(),
    url: "/stadium_images/wankhede2.png",
    stadiumId: stadiums[2].id
  }
]


export {stadiums, tickets, stadiumImages}