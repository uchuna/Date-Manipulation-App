<template>
    <h3>Date: {{ currentDate.toDateString() }}</h3>
      <div class="container">
          <button class="bt1" @click="addDays(1)">Add Day</button>
          <button class="bt2" @click="addMonths(1)">Add Month</button>
      </div>
  </template>
  
  <script>
  
  import { useDate } from '../Composables/useDate';
  
      export default {
          setup() {
            const { currentDate, addDays, addMonths } = useDate(new Date());
  
          return {
            currentDate,
            addDays,
            addMonths
          };
        }
      }
  </script>
  
  <style >
  body {
        margin: 0;
        height: 100vh;
        background: linear-gradient(120deg, #ff0000, #ff9900, #ffff00, #33cc33, #3366ff, #9900cc, #ff00ff);
        background-size: 1800% 1800%;
        animation: rainbow 18s ease infinite;
      }
  
      @keyframes rainbow {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;
  }
  
  h3 {
    text-align: center;
    padding: 20px;
    background-color: black;
    color: white;
  }
  
  button {
    background-color: #4caf50;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
    flex: 1 0 100%; /* Adjust button width */
    max-width: 200px;
  }
  
  button:hover {
    background-color: gray;
  }
  
  @media screen and (max-width: 768px) {
    button {
      flex: 1 0 40%; /* Adjust button width for smaller screens */
      max-width: none;
    }
  }
  
  </style>