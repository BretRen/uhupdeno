import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))

app.post('/reg', async (c) => {

  let body;
  try {
    body = await c.req.json()
  }catch(e){
    console.log("ERROR: " + e)
  }

  const username = body.username;
  const password = body.password;

  if (!username || !password){
    console.log("ERROR")
    return c.json({error:"Missing required parameters"})
  }

  console.log(username)
  console.log(password)


  console.log("reg user")
  return c.text("200")
})


Deno.serve(app.fetch)