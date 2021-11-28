import axios from "axios";

interface IReturnData {
  token_uris: string[];
  token_ids: string[];
}
const url =
  "arn:aws:lambda:us-east-2:710568068167:function:cozyhome_minter";

const get_mintables = async () => {
  // axios.defaults.headers.common = {
  //   "X-API-Key": "HgfEvNu8sv5zs1I06m0pT9pvP7AGo6Co98oaUUm7",
  //   'Access-Control-Allow-Origin': '*',
  // };

  // axios({
  //   method: "GET",
  //   url: url,
  //   // data: {
  //   //   KEY: "73m4nk8udN8RmpW35aBVN4WZporzcY36nkECAXqh",
  //   // },
  // })
  //   .then((response) => {
  //     console.log("AMKKKKK")
  //     console.log(response);

  //   })
  //   .catch((err) => console.log(err));
};

export default get_mintables;
