
Prove of concept related to Node.js project, TypeScript, with some Services, SOLID and Design Patterns concepts. I also include some useful day-to-day tools such as ts-node-dev, ESLint, Prettier and EditorConfig whose improve a lot to save time during the development process.


<h4 align="center">
<a id="user-content---animations-and-gestures-manipulation-heavy-react-native-app" class="anchor" aria-hidden="true" href="#--animations-and-gestures-manipulation-heavy-react-native-app">
  <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
    <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
    </path>
  </svg>
</a>
  
  <h2><img src="https://github.com/maasantos10/goStack-challenge-concept-nodejs/blob/master/assets/images/32px-Node.js_logo.svg.png"/> GoStack-challenge-concept Nodejs </h2> 
</h4>


Node backend concepts with some rest APIs.
# gostack-concept-typescript-nodejs

<h2><a id="user-content-rocket-technologies" class="anchor" aria-hidden="true" href="#rocket-technologies"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji> Technologies</h2>

<p>This project was developed with the following technologies:</p>


<ul>
<!--
<li><a href="https://expo.io/" rel="nofollow">Expo</a></li>
<li><a href="https://facebook.github.io/react-native/" rel="nofollow">React-Native</a></li>
<li><a href="https://kmagiera.github.io/react-native-gesture-handler/" rel="nofollow">React Native Gesture Handler</a></li>
<li><a href="https://reactnavigation.org/" rel="nofollow">React Navigation</a></li>
<li><a href="https://redux.js.org/" rel="nofollow">Redux</a></li>
<li><a href="https://graphql.org/learn/" rel="nofollow">GraphQl</a></li>
<li><a href="https://www.apollographql.com/" rel="nofollow">Apollo</a></li>
<li><a href="https://www.styled-components.com/" rel="nofollow">styled-components</a></li>
<li><a href="https://github.com/jerolimov/react-native-showdown">react-native-showdown</a></li>
<li><a href="https://expo.github.io/vector-icons/" rel="nofollow">@expo/vector-icons</a></li>
<li><a href="https://docs.expo.io/versions/latest/sdk/linear-gradient/" rel="nofollow">expo-linear-gradient</a></li>
<li><a href="https://github.com/facebook/prop-types">PropTypes</a></li>
<li><a href="https://code.visualstudio.com/" rel="nofollow">VS Code</a> with <a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" rel="nofollow">EditorConfig</a> and <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" rel="nofollow">ESLint</a></li>
-->
</ul>

<h2>
  <a id="user-content-information_source-how-to-use" class="anchor" aria-hidden="true" href="#information_source-how-to-use">
    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
      <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
      </path>
    </svg>
  </a>
  <g-emoji class="g-emoji" alias="information_source" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2139.png">
    ℹ️
  </g-emoji> How To Use
</h2>

<p>To clone and run this application, you'll need <a href="https://git-scm.com" rel="nofollow">Git</a>, 
<a href="https://nodejs.org/" rel="nofollow">Node.js v10.16</a> or higher + <a href="https://yarnpkg.com/" rel="nofollow">Yarn v1.13</a> or higher installed on your computer. From your command line:</p>

<div class="highlight highlight-source-shell">
<pre><span class="pl-c"><span class="pl-c">#</span> Clone this repository</span>
$ git clone https://github.com/maasantos10/goStack-challenge-concept-nodejs designCode

<span class="pl-c"><span class="pl-c">#</span> Go into the repository</span>
$ <span class="pl-c1">cd</span> designCode

<span class="pl-c"><span class="pl-c">#</span> Install dependencies</span>
$ yarn install

<span class="pl-c"><span class="pl-c">#</span> Run the app (iOS)</span>
$ yarn ios

<span class="pl-c"><span class="pl-c">#</span> Run the app (Android)</span>
$ yarn android</pre></div>


<h2><a id="user-content-memo-license" class="anchor" aria-hidden="true" href="#memo-license"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><g-emoji class="g-emoji" alias="memo" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dd.png">📝</g-emoji> License</h2>

<p>This project is under the MIT license. See the 
  <a href="https://github.com/maasantos10/goStack-challenge-concept-nodejs/blob/master/LICENSE">LICENSE</a> for more information.</p>

<hr>
</hr>


<p>Made by Marcos Santos <g-emoji class="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png">👋</g-emoji> <a href="https://linkedin.com/in/marcos-almeida-santos-ba573842/" rel="nofollow">Get in touch!</a></p>
