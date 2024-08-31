import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import Navbar from '@/components/Navbar'
import styles from '../styles/market.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

// Define the Coin interface
interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  price_change_percentage_24h: number
}

const Market: React.FC = () => {
  // Initialize the chart data structure correctly
  const [coins, setCoins] = useState<Coin[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false'
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: Coin[] = await response.json()
        setCoins(data)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptoData()
  }, [])

  return (
    <div className={styles.main}>
      <div className="wrapper">
        <Navbar />
        {loading ? (
          <h1
            style={{
              textAlign: 'center',
              marginTop: '20%'
            }}
          >
            Loading...
          </h1>
        ) : (
          <div style={{ marginTop: '50px' }}>
            <h1 className={styles.title}>Live Cryptocurrency Market</h1>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #ddd',
                maxHeight: '550px',
                overflowY: 'auto'
              }}
            >
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ position: 'sticky', top: 0 }}>
                  <tr style={{ backgroundColor: '#282c34', color: 'white' }}>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Symbol</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Current Price (USD)</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Rank</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Market Cap (USD)</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>24h Change (%)</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin) => (
                    <tr key={coin.id} style={{ textAlign: 'center' }}>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                        <img src={coin.image} alt={coin.name} style={{ width: '20px', marginRight: '10px' }} />
                        {coin.name}
                      </td>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>{coin.symbol.toUpperCase()}</td>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                        ${coin.current_price.toLocaleString()}
                      </td>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                        {coin.market_cap_rank.toLocaleString()}
                      </td>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>${coin.market_cap.toLocaleString()}</td>
                      <td
                        style={{
                          padding: '10px',
                          border: '1px solid #ddd',
                          color: coin.price_change_percentage_24h > 0 ? 'green' : 'red'
                        }}
                      >
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Market
