import Nextuth from 'next-auth';
import Providers from 'next-auth/providers'

export default Nextuth({
    providers:[
        Providers.GitHub({
                    clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        })
    ],
    database: process.env.DATABASE_URL,
    session:{
        jwt:true
    },
    callbacks:{
        async redirect(url, baseUrl) {
            return url.startsWith(baseUrl)
            ? url
            : baseUrl
        }
    }
    
})