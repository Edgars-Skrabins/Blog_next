import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
    providers: [
        GitHubProvider({
// @ts-ignore
            clientId: process.env.GITHUB_ID,
// @ts-ignore
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
});
