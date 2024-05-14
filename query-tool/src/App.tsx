import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'

function App() {
  return (
    <Layout>
        <Header style={{ color: '#fff' }}>Query tool</Header>
        <Content>
            <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
                
            </div>
        </Content>
        <Footer>
            made by niraj.
        </Footer>
    </Layout>
  )
}

export default App