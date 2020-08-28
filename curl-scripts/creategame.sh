
curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=8e8de907865db24c06b43b642c69d0b3" \
  --header "Content-Type: application/json" \
  --data '{}'
echo
