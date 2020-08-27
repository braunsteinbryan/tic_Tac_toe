# VARIABLE=VALUE sh curl-scripts/sign-out.sh

curl 'https://tic-tac-toe-api-development.herokuapp.com/sign-out' \
  --include \
  --request DELETE \
  --header "Authorization: Token token=584c6cd4bf5836b36d934a96fa5ba0b1" \

echo
