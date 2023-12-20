import axios from 'axios';

export const  MakeHttp = async() =>{

  function GetAccountingRestService() {
    return axios.get('https://localhost:7285/GetAccountingRestService');
  }
    
  function GetAuthenticationRestService() {
        return axios.get('https://localhost:7285/GetAuthenticationRestService/');
      }
  function GetCustomersRestService() {
        return axios.get('https://localhost:7285/GetCustomersRestService');
      }
  function GetContractsRestService() {
        return axios.get('https://localhost:7285/GetContractsRestService');
      }

      function GetLegacyNpaApi() {
        return axios.get('https://localhost:7285/GetLegacyNpaApi');
      }

      function GetNpaReactWeb() {
        return axios.get('https://localhost:7285/GetNpaReactWeb');
      }

      function GetPaydiniAspx() {
        return axios.get('https://localhost:7285/GetPaydiniAspx');
      }

      function GetUnderwritingReactWeb() {
        return axios.get('https://localhost:7285/GetUnderwritingReactWeb');
      }

      function GetLeadsRestService() {
        return axios.get('https://localhost:7285/GetLeadsRestService');
      }

      function GetLoansRestService() {
        return axios.get('https://localhost:7285/GetLoansRestService');
      }

      function GetUnderwritingRestService() {
        return axios.get('https://localhost:7285/GetUnderwritingRestService');
      }
      
      const results =  await Promise.all([GetAccountingRestService(),GetAuthenticationRestService(),GetCustomersRestService() ,GetContractsRestService(),GetLegacyNpaApi(),GetLeadsRestService(),GetLoansRestService(),GetNpaReactWeb(),GetPaydiniAspx(),GetUnderwritingReactWeb(),GetUnderwritingRestService()])
        .then(function (results) {
           return results;
        });
        return results;
 
    }
