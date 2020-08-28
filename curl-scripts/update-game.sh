

curl "https://tic-tac-toe-api-development.herokuapp.com/games/5f48690ee246820017ea3407" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer 8e8de907865db24c06b43b642c69d0b3" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
     "cell": {
      "index": 0,
      "value": "x"
   },
   "over": false
 }
}'
echo
