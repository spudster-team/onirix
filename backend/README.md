# ONYRIX

## API: https://spudster.madagascar.webcup.hodi.host/webcupbackend


- _POST_ `api/user` for register
```json
{
	"username": "username",
	"email": "email@mail.org",
	"password": "strongpass"
}
```

---
- _GET_  `api/user` get user detaile 
	- Need Authentication, add this on headers :
		-  Authorization: Token: _token_
---
- POST `api/predict`
`if user is authenticate, we save it on database`
need Authorization Token : Token on `headers`
```json
{
	"description": "your dream description"
}
```
---
- GET `user/history` need authentication
