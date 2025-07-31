# bsky-handles-service

This project just takes advantage of bluesky domain handles' no dns panel option with .well-known/atproto-did to allow you to get a custom handle as a subdomain on whatever domain the host of this project decides to use, this was made for protogen.social

## Requirements

- [Bun](https://bun.sh)
- Postgresql
- Reverse Proxy supporting `x-forwarded-host` and `x-forwarded-proto` headers

## Contributing

Dev environments don't have the advantage of being able to test on bluesky but you should just be able to wing it
