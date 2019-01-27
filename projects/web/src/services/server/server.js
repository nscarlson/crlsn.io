import express from 'express'

import Render from './services/Render'
import StaticFiles from './services/StaticFiles'

const app = express()

app.use(StaticFiles)
app.use(Render)

const init = () => app.listen(3000, () => {
    console.log('Listening on port 3000')
})

export { init }
export default app