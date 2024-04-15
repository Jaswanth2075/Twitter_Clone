var tweets = [];

function postTweet() {
    var tweetText = $('#tweetInput').val();
    if (tweetText.trim() !== '') {
        var tweet = { text: tweetText, likes: 0, retweets: 0 };
        tweets.unshift(tweet);
        updateTweetList();
        $('#tweetInput').val('');
    }
}

function likeTweet(index) {
    if (tweets[index].likes < 1) {
        tweets[index].likes++;
        updateTweetList();
    }
}

function retweet(index) {
    if (tweets[index].retweets < 1) {
        tweets[index].retweets++;
        updateTweetList();
    }
}

function updateTweetList() {
    var tweetList = $('#tweetList');
    tweetList.empty();

    tweets.forEach(function (tweet, index) {
        var tweetHtml = `
            <li class="tweet">
                <p>${tweet.text}</p>
                <div class="interaction">
                    <button onclick="likeTweet(${index})">Like (${tweet.likes})</button>
                    <button onclick="retweet(${index})">Retweet (${tweet.retweets})</button>
                </div>
            </li>`;
        tweetList.append(tweetHtml);
    });

    updateProfilePage();
}

function updateProfilePage() {
    var userTweets = $('#userTweets');
    userTweets.empty();

    tweets.forEach(function (tweet) {
        var tweetHtml = `<li>${tweet.text}</li>`;
        userTweets.append(tweetHtml);
    });
}

function showProfile() {
    $('#container').hide();
    $('.profile').show();
    updateProfilePage();
}
