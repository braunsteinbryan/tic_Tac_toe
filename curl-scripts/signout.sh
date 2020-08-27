# VARIABLE=VALUE sh curl-scripts/sign-out.sh

curl 'https://tic-tac-toe-api-development.herokuapp.com/sign-out' \
  --include \
  --request DELETE \
  --header "Authorization: Token token=baf3740c705b5bd39846c52770ed96ca" \

echo
