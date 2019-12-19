import React from 'react'
import TheMaze from "../components/themaze/Terrain";
import Layout from '../layouts/Main'


const Home = () => (
    <Layout>
      <div className="hero">
        <h1 className="title">Game</h1>
        <br />
        <div className="theMazeContainer">
          <TheMaze />
        </div>
      </div>

      <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 10px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      
      .theMazeContainer {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    </Layout>
)

export default Home
