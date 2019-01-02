# \<lit-uduvudu\> - DBPedia viewer built with web components

Uses [uduvudu](https://github.com/uduvudu/uduvudu) to process RDF triples from DBPedia and [lit-any](https://github.com/wikibus/lit-any) to render those triples to the browser

## Live version

The viewer is online and functional but search doesn't work because the search endpoint does not support HTTPS which is forced by Netlify.

As workaround it's possible to navigate to specific resource by manipulating the hash fragment. For example:

- https://uduvudu.hypermedia.app/#Biel/Bienne
- https://uduvudu.hypermedia.app/#Mercedes-Benz
- https://uduvudu.hypermedia.app/#Hugo_Chávez

## Running locally

```bash
$ yarn
$ yarn dev
```
