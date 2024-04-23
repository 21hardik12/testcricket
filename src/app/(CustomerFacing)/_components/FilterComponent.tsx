"use client"
import { useState } from 'react';

function FilterComponent() {
  const [date, setDate] = useState('');
  const [categories, setCategories] = useState([]);
  const [moreFilters, setMoreFilters] = useState({});
  const [price, setPrice] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCategoriesChange = (e) => {
    const selectedCategories = Array.from(e.target.selectedOptions, (option) => option.value);
    setCategories(selectedCategories);
  };

  const handleMoreFiltersChange = (e) => {
    const { name, value } = e.target;
    setMoreFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleClearFilters = () => {
    setDate('');
    setCategories([]);
    setMoreFilters({});
    setPrice('');
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label htmlFor="date" className="block font-medium mb-1">
          Date
        </label>
        <div className="flex items-center">
          <select
            id="date"
            value={date}
            onChange={handleDateChange}
            className="border border-gray-300 rounded-md py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Date</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="thisWeekend">This Weekend</option>
            <option value="dateRange">Date Range</option>
          </select>
          <button
            onClick={() => setDate('')}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="categories" className="block font-medium mb-1">
          Categories
        </label>
        <div className="flex items-center">
          <select
            id="categories"
            multiple
            value={categories}
            onChange={handleCategoriesChange}
            className="border border-gray-300 rounded-md py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
            {/* Add more category options */}
          </select>
          <button
            onClick={() => setCategories([])}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">More Filters</label>
        <div className="flex items-center mb-2">
          <input
            type="text"
            name="filter1"
            placeholder="Filter 1"
            value={moreFilters.filter1 || ''}
            onChange={handleMoreFiltersChange}
            className="border border-gray-300 rounded-md py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="filter2"
            placeholder="Filter 2"
            value={moreFilters.filter2 || ''}
            onChange={handleMoreFiltersChange}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Add more filter inputs */}
        </div>
        <button
          onClick={() => setMoreFilters({})}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Clear
        </button>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block font-medium mb-1">
          Price
        </label>
        <div className="flex items-center">
          <select
            id="price"
            value={price}
            onChange={handlePriceChange}
            className="border border-gray-300 rounded-md py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Price</option>
            <option value="price1">Price 1</option>
            <option value="price2">Price 2</option>
            <option value="price3">Price 3</option>
            {/* Add more price options */}
          </select>
          <button
            onClick={() => setPrice('')}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Clear
          </button>
        </div>
      </div>
      <button
        onClick={handleClearFilters}
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Clear All Filters
      </button>
      <button className="mt-4 text-blue-500 hover:underline focus:outline-none">
        Browse by Venues
      </button>
    </div>
  );
}

export default FilterComponent;