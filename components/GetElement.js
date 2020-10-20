export default function getelement(){ 
    
    fetchData = async()=>{
    const response = await fetch('http://172.21.201.15:8000/api/v1/item%27') 
    const test = await response.json()
    console.log(test)
    }   
}