# Test by Martin Szyllo

Coded in pure JS (ES2015 flavour when possible) with no libraries other than highlight.js used for code formatting/highlighting.

I am assuming you have node and npm installed.


**Get the code, install**

 
```

$ git clone https://github.com/ficshelf/tst6.git

$ cd tst6

$ npm install

```

I have used **webpack** to bundle up the files. This is a long-term load time optimisation strategy.

I am also using a public CDN to access **highlight.js** CSS (which is hefty).

```
$ webpack
```

This will run the supplied webpack config file to create shippable bundle, which is also accessible as a js library.

i suggest using **http-server -p3000** to run the dumbest possible server to demonstrate the functioning of this test.

```

$ cd tst6
$ http-server -p 3000

```
------

## unit tests

I included an outline of a basic testing approach using **mocha** and **npm**

```

$ cd tst6
$ npm test

```

Will run some basic unit tests. More needed more dev time :)

I also have started adding **karma** with **mocha** support for unit testing in actual browsers.

 
