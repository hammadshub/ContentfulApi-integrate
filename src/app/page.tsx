import { cache } from "react"


interface IQuoteData{
  
  _id: string,
  content: string,
  author: string,
  authorSlug: string,
  length: number,
  dateAdded: string,
  dateModified: string
}

                                 
const getData= async()=>{                                                
// try {                                                   //for static SSR--> {cache:"force-cache"}
   const res =await fetch("https://api.quotable.io/random?tags=technology", {cache:"no-cache"})



//------->>>>>> error handling all that is commented from line 12 to 44


  if(!res.ok){
    throw new Error("Failed to fetch Data")
}

return res.json()
  
// } catch (error:any) {
//   console.log(error.message)
// return{
//   error: error.message
// }

}

  
//}


export default async function Home() {
  const quoteData = await getData();
  
  // if(quoteData.error){
  //   return <h2>{quoteData.error}</h2>
  // }

 return (
    <>
      <div>{quoteData.content}</div>  
    </>
  )
}
