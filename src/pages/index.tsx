import { Button, Container, Paper } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import EditableComponent from '../components/EditableComponent'

const animVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
}

const Home: NextPage = () => {
  return (
    <Box sx={{ backgroundColor: 'beige' }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <Paper variant="elevation" elevation={2}>
          <Stack
            padding="50px"
            minWidth="lg"
            minHeight="100vh"
            sx={{ backgroundColor: 'white' }}
            component={motion.div}
            animate={{
              backgroundColor: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
            }}
            transition={{ delay: 1, default: { ease: 'linear' } }}
          >
            <EditableComponent>
              <Box
                border="0px"
                padding="0px"
                width="100px"
                height="50px"
                borderRadius="10px"
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                sx={{ backgroundColor: 'red' }}
              >
                <Button
                  color="warning"
                  sx={{ width: '100%', height: '100%' }}
                />
              </Box>
            </EditableComponent>
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}

export default Home