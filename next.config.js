/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com',]
    },
    env: {
        MONGO: 'mongodb+srv://test:test@cluster0.vqfz09h.mongodb.net/test?retryWrites=true&w=majority'
    }
}

module.exports = nextConfig
