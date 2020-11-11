//This script or logic, attempts to retrieve all items matched to a certain query criteria


// An async function that gets '50' items starting at the provided index 'start' 
let productRequest = async (start) => {
  // Create an empty array to get items
  let items = [];
  //await query, pass results into items
  let request = await axios.post("https://canadia.ie//graphql/", {
    query: `   
    query Products{
    product_single (s: "parent_id=1019,limit=72,start=${start},sort=title,pf_thickness=12mm") {
                        list {
                          title
                          product_code
                          body
                          product_primary_thumb {
                            httpUrl
                          }
                        }
                      }
    }
    `}).then((data) => { items = data.data.data.product_single.list })
  // Return the items after promise ends
  return items
}

//Make 2 requests and empty contents of both arrays into one
let allItems = [...await productRequest(0), ...await productRequest(49)]
//Log items
console.log(allItems)