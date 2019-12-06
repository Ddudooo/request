# REQUEST GITHUB ACTION

## USAGE
```
- name: Webhook
  uses: ddudooo/request@master
  with:
    METHOD: POST
    Headers: '{"Content-type":"application/json"}'
    URL: localhost
    data: '{
      "EXAMPLE": "THIS IS EXAMPLE DATA",      
    }'
```
## OTHER