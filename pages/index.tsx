import type { NextPage } from 'next';
import GetRequest from "../lib/GetRequest";
import User from "../types/User";

const Home: NextPage = () => {
  const {result, error, loading } = GetRequest<User>('/user?id=3');

  return (
      <div style={{margin: "16px"}}>
        <h1>User:</h1>
        {error ?
            <em>{error}</em> :
            <p>{loading || !result ? "loading..." : result.name}</p>
        }
      </div>
  )
}

export default Home
