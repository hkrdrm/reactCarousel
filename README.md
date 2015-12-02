# reactCarousel
React Component that auto builds your bootstrap carousel

I'm using php to pull a list image locations from a wordpress database and
spitting out into json string like this:

echo "<script>var images = " . json_encode($promo) . "</script>";

you could just as easily plugin a static list or whatever.

Just put this give the html file a div to post to and react does the rest.

<div id="slides"></div>
