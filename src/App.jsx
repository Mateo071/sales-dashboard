import Grid from '@mui/material/Grid';
import './App.css';

function App() {

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <div className='NavBar'>
            <h1>The King's Restaurant</h1>
            <h3>Dashboard Owner</h3>
            <p>Dashboard</p>
            <p>FAQ Page</p>
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <div className='Dashboard'>
            <h1>DASHBOARD</h1>
            <h3>Welcome to your dashboard</h3>
            <Grid container spacing={2}>
              <Grid item md={3}>
                <div className="top-option">
                  <h4>431,225</h4>
                  <h5>Sales Obtained +21%</h5>
                </div>                
              </Grid>
              <Grid item md={3}>
                <div className="top-option">
                  <h4>42,441</h4>
                  <h5>New Clients +5%</h5>
                </div>  
              </Grid>
              <Grid item md={3}>
                <div className="top-option">
                  <h4>1,325,134</h4>
                  <h5>Traffic Received +43%</h5>
                </div>  
              </Grid>
              <Grid item md={8}>
                <div className="bottom-option">
                  <h4>Revenue Generated</h4>
                  <p>$59,342.32</p>
                </div>  
              </Grid>
              <Grid item md={4}>
                <div className="bottom-option">
                  <h3>Recent Transactions</h3>
                  <p>johndoe 2021-09-01 $43.95</p>
                  <p>jackdower 2022-04-01 $133.45</p>
                  <p>aberdohnny 2021-09-01 $43.95</p>
                </div>  
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default App
