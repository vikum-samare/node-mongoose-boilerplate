const config = include("utils/config")

const mockRedisClient = { on: () => { /* mock */ } }
const mockSocket = {
    webhook: () => { /* mock */ },
    io: {
        to: () => ({
            emit: () => { /* mock */ }
        })
    }
}

export const injectRedisClient = (init) =>
    config.NODE_ENV !== "test" ? init() : mockRedisClient

export const injectSocket = (init) =>
    config.NODE_ENV !== "test" ? init() : mockSocket
