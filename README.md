# functional_cop__okasaki_list
An purely functional list as described by Chris Okasaki.

Ideally, we would have implementations in several languages, the only current one is in typescript for nodejs.

See README.md files in each subdirectory for more information.


In general, Okasaki Lists are persistant/immutable and have the following functions:

*  cons newElement list --> newList with newElement prepended
*  snoc list newElement --> newList with newElement appended

*  head list --> first element of the list
*  daeh list --> last element of the list

*  tail list --> list without it's first element
*  lait list --> list without it's last element
