export default function getelement(){

    fetchData = async()=>{
    const response = await fetch('http://172.21.201.27:8000/api/v1/element')
    const test = await response.json()
    console.log(test)
    }
}
