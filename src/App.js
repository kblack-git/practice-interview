import logo from './logo.svg';
import './App.css';
import react from 'react'
import { useEffect, useState } from 'react'

function App() {

  const [dogPic, setDogPic ] = useState()

  const url = 'https://dog.ceo/api/breeds/image/random';
const options = {
	method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Key': '7819b75dccmshf542472e7d87915p19fe7ajsn2dba90e6ab60',
	// 	'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	// }
};

useEffect(() => {
    const fetchDogPic = async () => {
      try {
	const response = await fetch(url, options);
	const result =  await response.json();
  
	console.log(result)
  setDogPic(result.message)
        }  catch(error) {
    console.error(error);

}
        // try {
        //   const response = await fetch(
        //     `https://data.sec.gov/submissions/CIK${cikString}.json`
        //   );
        //   const data = await response.json();
        // //   console.log('secGovFetch', data)
        //   setDataFromSecGov(data);
        // //   console.log(dataFromSecGov)
        // //   console.log(dataFromSecGov.filings.recent.accessionNumber[0])
        // //   console.log(dataFromSecGov.filings.recent.primaryDocument[0])
        // //   console.log(`www.sec.gov/Archives/edgar/data/`+(dataFromSecGov.cik)+'/'+(dataFromSecGov.filings.recent.accessionNumber[0])/replace(/-/g, '')+'/'+(dataFromSecGov.filings.recent.primaryDocument[0]))
        // //   setUrl(`www.sec.gov/Archives/edgar/data/${dataFromSecGov.cik}/${(dataFromSecGov.filings.recent.accessionNumber[0]).replace(/-/g, '')}/${dataFromSecGov.filings.recent.primaryDocument[0]}`)
        //   console.log(url)
        //   console.log("testing", url)
        // } catch (error) {
        //   console.error(error);
        
      }
      fetchDogPic()
    }
   ,[]);






  return (
    <div className="App">
      <header className="App-header">
       <img src={dogPic} />
       
      </header>
    </div>
  );
}

export default App;
