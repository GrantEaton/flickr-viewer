### How to run

```cd flickr-viewer```

```cp .env.sample .env```

```yarn install```

```yarn start```


### Description

This is a basic application to show the 10 most recent photos from flickr.
I am aware that my UI is quite basic. I felt that building a nice UI that allows selecting
of different API parameters, then passing them into the api calls was fairly trivial, so
I chose to, rather, build out a fairly sound and scalable Typescript/ React/ Redux/ epic middleware / RxJs
application using some of the best practices would be more interesting and representative of my
front-end knowledge and application. I chose to not spend much time on css.

Though a few @ts-ignores were thrown in so as not to spend time digging into type resolution, I felt that
this turned out fairly well.

The application displays the latest 10 images uploaded to flickr, similar to the example app.
I tried to filter out NFSW content, but some still slips in.
Please see [here](https://www.flickr.com/help/forum/en-us/72157690999953734/) it seems that not all content can be filtered out, because
rather than using machine learning to detect NSFW filters, Flickr relies on the users tagging the content as NSFW and not all of them do.

Oh, and yes, my API key is committed. This makes it easier for you to run. I mean, the example I was sent had the API key on in the network requests, so it isnt all that different I suppose hah :D 

[Too Lazy, Didnt Run: Heres a screenshot demo of the website](https://drive.google.com/file/d/11Vh0NR9DTT7KGdo-wdNtDGnKribaIPGU/view?usp=sharing)

#### Example Usages of Above Technologies
* [Epic middleware/ RxJS](https://github.com/GrantEaton/flickr-viewer/blob/master/src/epics/image-epics.ts#L27)
* [Redux reducers](https://github.com/GrantEaton/flickr-viewer/blob/master/src/reducers/image-reducers.ts#L11)
* [Typescript types](https://github.com/GrantEaton/flickr-viewer/blob/master/src/types/types.ts#L1)
* [React + Ts component](https://github.com/GrantEaton/flickr-viewer/blob/master/src/components/ImageDashboard.tsx#L36)
* [store and middleware setup](https://github.com/GrantEaton/flickr-viewer/blob/master/src/store/index.ts#L1)

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

I did not add tests, sorry! If I was going to, I would use jest and mock that
reducers are called with correct payloads and check the state is accurate afterward :)

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
