import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import rawgApi from "./../apis/rawgApi";
interface Game {
  id: number;
  name: string;
}
const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    rawgApi
      .get("/xgames", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);
  return (
    <>
      {error && <Text color="red.200">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Games;
