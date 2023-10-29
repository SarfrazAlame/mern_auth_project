import { connect } from 'mongoose'

const connectDataBase = () =>{
    connect(process.env.DB_URL).then((data)=>{
        console.log(`mongodb connected with server ${data.connection.host}`)
    })
}


export default connectDataBase