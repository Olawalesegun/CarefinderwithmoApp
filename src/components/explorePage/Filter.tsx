import styles from '@/styles/ExplorePage.module.css';

import { GoSearch } from 'react-icons/go';
import { RiArrowDownSLine } from 'react-icons/ri';
import { GoCalendar } from 'react-icons/go';
import { departmentsData } from '@/data/departmentsData';
import { StateData } from '@/data/locationData';

import { useContext, useState } from 'react';
import { FilterContext, Filter } from '@/context/filterContext';
import { MedicalCentreData } from '@/data/medicalCentres';

interface FilterState {
  area: string;
  state: string;
  department: string;
  date: string;
}

export default function Filter() {
  const { filter, setFilter } = useContext(FilterContext);

  const [formData, setFormData] = useState<FilterState>({
    area: '',
    state: '',
    department: '',
    date: '',
  });

  const handleAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, area: event.target.value });
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, state: event.target.value });
  };

  const handleDepartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, department: event.target.value });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, date: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { area, state, department, date } = formData;
    if (area && state && department) {
      setFilter({ area, state, department, date });
    }
    console.table(filter);
  };

  return (
    <div className='filter-container'>
      <form id='filterForm' onSubmit={handleSubmit} className='filter-form'>
        <input
          type='text'
          placeholder='Area'
          value={formData.area}
          onChange={handleAreaChange}
        />
        <select placeholder='State' value={formData.state} onChange={handleStateChange}>
          <option value='' data-placeholder='State 1'>
            Select A State
          </option>
          {StateData.map((x, index) => (
            <option
              value={x}
              data-placeholder={`State ${index + 1}`}
              key={index}
            >
              {x}
            </option>
          ))}
        </select>

        <select
          placeholder='Department'
          value={formData.department}
          onChange={handleDepartmentChange}
        >
          <option value='' data-placeholder='Department 1'>
            Select A Department
          </option>
          {departmentsData.map((x, index) => (
            <option
              value={x}
              data-placeholder={`Department ${index + 1}`}
              key={index}
            >
              {x}
            </option>
          ))}
        </select>

        <input type='datetime-local' value={formData.date} onChange={handleDateChange} />

        <button type='submit'>Filter</button>
        <button type='reset'>Reset</button>
      </form>
    </div>
  );
}
