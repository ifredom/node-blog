var express = require('express')
var eventproxy = require('eventproxy')
var superagent = require('superagent')
var cheerio = require('cheerio')
var url = require('url');

var cnodeUrl = 'https://cnodejs.org/';


superagent.get(cnodeUrl)
    .end((err, sres) => {
        if (err) {
            return next(err)
        }

        var $ = cheerio.load(sres.text)
        var topicUrls = []
        $('#topic_list .topic_title').each((idx, ele) => {
            var $ele = $(ele)
            var href = url.resolve(cnodeUrl, $ele.attr('href'))
            topicUrls.push(href)
        })
        console.log(topicUrls);

        topicUrls.forEach((eachitem) => {
            superagent.get(eachitem)
                .end((err, res) => {
                    console.log('fetch ' + eachitem + ' successful')
                    ep.emit('topic_html', [eachitem, res.text])
                })
        })

        var ep = new eventproxy();
        ep.after('topic_html', topicUrls.length, function(topics) {
            topics = topics.map(function(topicPair) {
                var topicUrl = topicPair[0];
                var topicHtml = topicPair[1];
                var $ = cheerio.load(topicHtml);
                return ({
                    title: $('.topic_full_title').text().trim(),
                    href: topicUrl,
                    comment1: $('.reply_content').eq(0).text().trim(),
                });
            });

            console.log('final:');
            console.log(topics);
        });

    })