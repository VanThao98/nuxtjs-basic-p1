
export default defineEventHandler( async(event) => {
    
    //handle query param
    // const {name} =getQuery(event)
    // handle post data
    // const {age} = await readBody(event)
    // api call with private key   
    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_Yqs6qKfhWZW7pc19w9KCe4OCmNDkopIpJoRpuGpa')
    return {
        // message: `Hello, ${name}! You are ${age} years old`
        data
    }
})