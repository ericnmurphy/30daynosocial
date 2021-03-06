import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import Layout from '../components/layout'
import SubscribeForm from '../components/subscribeForm'

const IndexPage = () => (
  <Layout>
    <section
      style={{
        marginBottom: '6rem',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          marginBottom: '2rem',
        }}
      >
        Social media is ruining your life.
      </h1>
      <p>
        You've probably heard a lot of the disadvantages of social media by now.
        Here's just a few of them:
      </p>
      <ul
        style={{
          marginBottom: '5rem',
        }}
      >
        <li>
          Becoming addicted to checking how many likes and followers you have
        </li>
        <li>
          Constantly comparing your life to curated versions of your friends and
          celebrities
        </li>
        <li>Being unable to focus, always have an urge to check something</li>
        <li>
          Gives you an artificial sense of being social instead of making real
          human contact
        </li>
        <li>
          Getting a diet of misinformation from fake news and clickbait
          headlines
        </li>
        <li>
          Having your privacy totally disregarded just to make more money for a
          company
        </li>
      </ul>
      <p>
        People are starting to wake up to the dark side of social media. The
        companies promised a lot: that we would be more connected, build new
        groups of friends, and keep up to date about the latest news. But now
        we're more disconnected and depressed than ever.
      </p>
      <p>If you've had enough, it's time to stop.</p>
    </section>
    <section
      style={{
        marginBottom: '6rem',
      }}
    >
      <h3>What is #30DayNoSocialChallenge?</h3>
      <p>
        The challenge is to{' '}
        <strong>stay off all social media for 30 days</strong>.
      </p>
      <p>
        That means no Facebook, Twitter, Instagram, Reddit or any
        endlessly-scrolling social media sites. No posting, no checking, no
        nothing. If you have to ask if it's social media, it probably is. No
        contact for 30 days.
      </p>
      <p>
        Why? In 30 days, you can help to rewire your brain and break free of the
        addiction. You can spend more time in the moment, instead of being
        caught up in distractions all day. You can spend time being actually
        social with friends, instead of pretending you are by scrolling through
        Instagram.
      </p>
      <p>
        After 30 days, you can go back if you want to—but this time you can be
        much more conscious about it.
      </p>
    </section>
    <section
      style={{
        marginBottom: '6rem',
      }}
    >
      <h3>My Story</h3>
      <p>
        It started for me whenever I started using Twitter again. It promised a
        lot of benefits: it's useful for professional networking, building an
        audience, and keeping up on the latest industry news. Great, right?
      </p>
      <p>
        But just months later, I was obsessed with checking it, hoping for
        likes, retweets and new followers. It's like I couldn't control myself,
        I'd check when I'm eating with my girlfriend, before bed, and the first
        thing in the morning.
      </p>
      <p>
        It was making me crazy. I started to feel like an addict. I hated that I
        didn't feel in control of my life any more.
      </p>
      <p>
        At the same time, I was listening to other people all over the world
        talk about how social media was having a negative effect on their lives.
        It's a huge problem.
      </p>
      <p>
        I wanted to quit, but I had the idea to help others to do the same.
        Together we can all break free.
      </p>
    </section>
    <section
      style={{
        marginBottom: '6rem',
      }}
    >
      <h3>Join Now</h3>
      <p>
        Join the movement. Sign up below and I'll send you a quick email on how
        to get started.
      </p>
      <p>Just drop your email below 👇</p>
      <SubscribeForm />
    </section>
  </Layout>
)

export default IndexPage
