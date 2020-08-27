# VARIABLE=VALUE sh curl-scripts/changepassword.sh

curl 'https://tic-tac-toe-api-development.herokuapp.com/change-password' \
  --include \
  --request PATCH \
  --header "Authorization: Token token=aaf0f6bed4afa6fe06e3eda1cbcbf7e2" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
