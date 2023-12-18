import { ref } from 'vue';

export const useDate = (initialDate) => {
  const currentDate = ref(initialDate);

  const addDays = (days) => {
    const newDate = new Date(currentDate.value);
    newDate.setDate(newDate.getDate() + days);
    currentDate.value = newDate;
  };

  const addMonths = (months) => {
    const newDate = new Date(currentDate.value);
    newDate.setMonth(newDate.getMonth() + months);
    currentDate.value = newDate;
  };

  return { currentDate, addDays, addMonths };
};