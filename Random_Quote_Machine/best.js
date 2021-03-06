(function(window) { 
    "use strict";

    var best = [
    ['Good things come to people who wait, but better things come to those who go out and get them.', 'Unknown'],
    ['All progress takes place outside the comfort zone.', 'Michael John Bobak'],
    ['You will succeed because most people are lazy.', 'Unknown'],
    ['The ones who are crazy enough to think they can change the world, are the ones who do.', 'Unknown'],
    ['Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.', 'Samuel Beckett'],
    ['Get action. Seize the moment. Man was never intended to become an oyster.', 'Theodore Roosevelt'],
    ["Change your life today. Don't gamble on the future, act now, without delay.", 'Simone de Beauvoir'],
    ['We should not give up and we should not allow the problem to defeat us.', 'A. P. J. Abdul Kalam'],
    ['If you ask me what I came into this life to do, I will tell you: I came to live out loud.', 'Emile Zola'],
    ['No bird soars too high if he soars with his own wings.', 'William Blake'],
    ['The wise does at once what the fool does at last.', 'Baltasar Gracian'],
    ["Nothing is impossible, the word itself says 'I'm possible'!", 'Audrey Hepburn'],
    ['Perseverance is failing 19 times and succeeding the 20th.', 'Julie Andrews'],
    ['Big shots are only little shots who keep shooting.', 'Christopher Morley'],
    ['They can conquer who believe they can.', 'Virgil'],
    ['Only I can change my life. No one can do it for me.', 'Carol Burnett'],
    ['I attribute my success to this - I never gave or took any excuse.', 'Florence Nightingale'],
    ["Don't give up. Don't lose hope. Don't sell out.", 'Christopher Reeve'],
    ['A creative man is motivated by the desire to achieve, not by the desire to beat others.', 'Ayn Rand'],
    ['Too many of us are not living our dreams because we are living our fears.', 'Les Brown'],
    ['A goal is a dream with a deadline.', 'Napoleon Hill'],
    ['All our dreams can come true if we have the courage to pursue them.', 'Walt Disney'],
    ['Perfection is not attainable, but if we chase perfection we can catch excellence.', 'Vince Lombardi'],
    ['One finds limits by pushing them.', 'Herbert Simon'],
    ['Go for it now. The future is promised to no one.', 'Wayne Dyer'],
    ["I have not failed. I've just found 10,000 ways that won't work.", 'Thomas A. Edison'],
    ['Well done is better than well said.', 'Benjamin Franklin'],
    ["Be thine own palace, or the world's thy jail.", 'John Donne'],
    ['Pursue one great decisive aim with force and determination.', 'Carl von Clausewitz'],
    ['Little minds are tamed and subdued by misfortune; but great minds rise above it.', 'Washington Irving'],
    ['The ultimate aim of the ego is not to see something, but to be something.', 'Muhammad Iqbal'],
    ['Do not wait to strike till the iron is hot; but make it hot by striking.', 'William Butler Yeats'],
    ['When something is important enough, you do it even if the odds are not in your favor.', 'Elon Musk'],
    ['Wherever you are - be all there.', 'Jim Elliot'],
    ['With the new day comes new strength and new thoughts.', 'Eleanor Roosevelt'],
    ['When you reach the end of your rope, tie a knot in it and hang on.', 'Franklin D. Roosevelt'],
    ["If you're going through hell, keep going.", 'Winston Churchill'],
    ['Who seeks shall find.', 'Sophocles'],
    ['We may encounter many defeats but we must not be defeated.', 'Maya Angelou'],
    ['After a storm comes a calm.', 'Matthew Henry'],
    ["If you don't like how things are, change it! You're not a tree.", 'Jim Rohn'],
    ['Either move or be moved.', 'Ezra Pound'],
    ['Keep your eyes on the stars, and your feet on the ground.', 'Theodore Roosevelt'],
    ['A somebody was once a nobody who wanted to and did.', 'John Burroughs'],
    ["You can't expect to hit the jackpot if you don't put a few nickels in the machine.", 'Flip Wilson'],
    ['If you can dream it, you can do it.', 'Walt Disney'],
    ['The successful warrior is the average man, with laser-like focus.', 'Bruce Lee'],
    ['Nothing great ever came that easy.', 'Kresley Cole'],
    ["What's the point of being alive if you don't at least try to do something remarkable.", 'Unknown'],
    ['Either I will find a way, or I will make one.', 'Philip Sidney'],
    ['Never complain and never explain.', 'Benjamin Disraeli'],
    ["You can't build a reputation on what you are going to do.", 'Henry Ford'],
    ['The past cannot be changed. The future is yet in your power.', 'Unknown'],
    ['No matter how hard the past is, you can always begin again.', 'Jack Kornfield'],
    ['You can never quit. Winners never quit, and quitters never win.', 'Ted Turner'],
    ["Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.", 'Wayne Dyer'],
    ["Don't stop when you're tired. STOP when you are DONE.", 'Unknown'],
    ['Arriving at one goal is the starting point to another.', 'John Dewey'],
    ['Never give up, for that is just the place and time that the tide will turn.', 'Harriet Beecher Stowe'],
    ['A will finds a way.', 'Orison Swett Marden'],
    ["If you want to conquer fear, don't sit home and think about it. Go out and get busy.", 'Dale Carnegie'],
    ['It does not matter how slowly you go as long as you do not stop.', 'Confucius'],
    ['To know oneself, one should assert oneself.', 'Albert Camus'],
    ['The best way to predict the future is to create it.', 'Peter Drucker'],
    ['Life is 10% what happens to you and 90% how you react to it.', 'Charles R. Swindoll'],
    ['Do whatever you do intensely.', 'Robert Henri'],
    ['In order to succeed, we must first believe that we can.', 'Nikos Kazantzakis'],
    ['Be kind whenever possible. It is always possible.', 'Dalai Lama'],
    ['It does not matter how slowly you go, so long as you do not stop.', 'Confucius'],
    ["Even if you fall on your face, you're still moving forward.", 'Victor Kiam'],
    ['Never retreat. Never explain. Get it done and let them howl.', 'Benjamin Jowett'],
    ['It is very important to know who you are. To make decisions. To show who you are.', 'Malala Yousafzai'],
    ['There is progress whether you are going forward or backward! The thing is to move!', 'Edgar Cayce'],
    ['I find that the harder I work, the more luck I seem to have.', 'Thomas Jefferson'],
    ['The people who influence you are the people who believe in you.', 'Henry Drummond'],
    ['You have to learn the rules of the game. And then you have to play better than anyone else.', 'Unknown'],
    ['Act as if what you do makes a difference. It does.', 'William James'],
    ['Begin to be now what you will be hereafter.', 'William James'],
    ['Action is the foundational key to all success.', 'Pablo Picasso'],
    ["The will to succeed is important, but what's more important is the will to prepare.", 'Bobby Knight'],
    ["You don't have to be great to start, but you have to start to be great.", 'Zig Ziglar'],
    ['Step by step and the thing is done.', 'Charles Atlas'],
    ['Always desire to learn something useful.', 'Sophocles'],
    ['The greatest pleasure in life is doing what people say you cannot do.', 'Walter Bagehot'],
    ['Never, never, never give up.', 'Winston Churchill'],
    ['If you are not willing to risk the usual you will have to settle for the ordinary.', 'Jim Rohn'],
    ['I was motivated to be different in part because I was different.', 'Donna Brazile'],
    ['The hardships that I encountered in the past will help me succeed in the future.', 'Philip Emeagwali'],
    ['The way to get started is to quit talking and begin doing.', 'Walt Disney'],
    ["Don't think, just do.", 'Horace'],
    ["Do you want to know who you are? Don't ask. Act! Action will delineate and define you.", 'Thomas Jefferson'],
    ['Start where you are. Use what you have. Do what you can.', 'Arthur Ashe'],
    ['No matter how many goals you have achieved, you must set your sights on a higher one.', 'Jessica Savitch'],
    ['From my tribe I take nothing, I am the maker of my own fortune.', 'Tecumseh'],
    ['Remember that not getting what you want is sometimes a wonderful stroke of luck.', 'Dalai Lama'],
    ['The greatest achievement was at first, and for a time, but a dream.', 'Napoleon Hill'],
    ['Hitch your wagon to a star.', 'Ralph Waldo Emerson'],
    ['By failing to prepare, you are preparing to fail.', 'Benjamin Franklin'],
    ['Expect problems and eat them for breakfast.', 'Alfred A. Montapert'],
    ['The most effective way to do it, is to do it.', 'Amelia Earhart'],
    ['You need to overcome the tug of people against you as you reach for high goals.', 'George S. Patton'],
    ['The starting point of all achievement is desire.', 'Napoleon Hill'],
    ['I am not afraid... I was born to do this.', 'Joan of Arc'],
    ["You can't wait for inspiration. You have to go after it with a club.", 'Jack London'],
    ['Small deeds done are better than great deeds planned.', 'Peter Marshall'],
    ["It's not about time, it's about choices. How are you spending your choices?", 'Beverly Abamo'],
    ["Set your goals high, and don't stop till you get there.", 'Bo Jackson'],
    ['Always do your best. What you plant now, you will harvest later.', 'Og Mandino'],
    ['Never give in and never give up.', 'Hubert H. Humphrey'],
    ['Quality is not an act, it is a habit.', 'Aristotle'],
    ["Do your work with your whole heart, and you will succeed - there's so little competition.", 'Elbert Hubbard'],
    ['The harder the conflict, the more glorious the triumph.', 'Thomas Paine'],
    ['One way to keep momentum going is to have constantly greater goals.', 'Michael Korda'],
    ['Poverty was the greatest motivating factor in my life.', 'Jimmy Dean'],
    ["Don't watch the clock; do what it does. Keep going.", 'Sam Levenson'],
    ['Problems are not stop signs, they are guidelines.', 'Robert H. Schuller'],
    ['A good plan violently executed now is better than a perfect plan executed next week.', 'George S. Patton'],
    ['You will never win if you never begin.', 'Helen Rowland'],
    ['Life begins at the end of your comfort zone.', 'Neale Donald Walsh'],
    ['I know not age, nor weariness nor defeat.', 'Rose Kennedy'],
    ['What is called genius is the abundance of life and health.', 'Henry David Thoreau'],
    ['Some people develop a wish bone where their back bone should be.', 'Unknown'],
    ["How do you know you're going to do something, untill you do it?", 'J. D. Salinger'],
    ['You are never too old to set another goal or to dream a new dream.', 'Les Brown'],
    ['The secret of getting ahead is getting started.', 'Mark Twain'],
    ['Success is walking from failure to failure with no loss of enthusiasm.', 'Winston Churchill'],
    ['If you want to achieve greatness stop asking for permission.', 'Unknown'],
    ['Failure will never overtake me if my determination to succeed is strong enough.', 'Og Mandino'],
    ['To begin, begin.', 'William Wordsworth'],
    ['I can, therefore I am.', 'Simone Weil'],
    ['Leap, and the net will appear.', 'John Burroughs'],
    ['He conquers who endures.', 'Persius'],
    ['The only place where success comes before work is in the dictionary.', 'Vidal Sassoon'],
    ['Ones best success comes after their greatest disappointments.', 'Henry Ward Beecher'],
    ['We make the world we live in and shape our own environment.', 'Orison Swett Marden'],
    ["When you want to succeed as bad as you want to breathe, then you'll be successful.", 'Eric Thomas'],
    ['What you do today can improve all your tomorrows.', 'Ralph Marston'],
    ['Knowing is not enough; we must apply. Willing is not enough; we must do.', 'Johann Wolfgang von Goethe'],
    ["It's always too early to quit.", 'Norman Vincent Peale'],
    ['We aim above the mark to hit the mark.', 'Ralph Waldo Emerson'],
    ["It always seems impossible until it's done.", 'Nelson Mandela'],
    ['Without hard work, nothing grows but weeds.', 'Gordon B. Hinckley'],
    ['Aim for the moon. If you miss, you may hit a star.', 'W. Clement Stone'],
    ['The dog that trots about finds a bone.', 'Golda Meir'],
    ['Do not weep; do not wax indignant. Understand.', 'Baruch Spinoza'],
    ['Many are called but few get up.', 'Oliver Herford'],
    ["Opportunities don't happen, you create them.", 'Chris Grosser'],
    ['Either you run the day or the day runs you.', 'Jim Rohn'],
    ['There is nothing deep down inside us except what we have put there ourselves.', 'Richard Rorty'],
    ['If you fell down yesterday, stand up today.', 'H. G. Wells'],
    ["Don't fight the problem, decide it.", 'George C. Marshall'],
    ["If you've got a talent, protect it.", 'Jim Carrey'],
    ['Perseverance is not a long race; it is many short races one after the other.', 'Walter Elliot'],
    ['If you think you can do it, you can.', 'John Burroughs'],
    ['Nothing in the world is more common than unsuccessful people with talent.', 'Unknown'],
    ['There is always room at the top.', 'Daniel Webster'],
    ["True happiness involves the full use of one's power and talents.", 'John W. Gardner'],
    ['The more we do, the more we can do.', 'William Hazlitt'],
    ["Follow your inner moonlight; don't hide the madness.", 'Allen Ginsberg'],
    ["Your talent is God's gift to you. What you do with it is your gift back to God.", 'Leo Buscaglia'],
    ['Opportunity does not knock, it presents itself when you beat down the door.', 'Kyle Chandler'],
    ['Know or listen to those who know.', 'Baltasar Gracian'],
    ['Do something wonderful, people may imitate it.', 'Albert Schweitzer'],
    ['Setting goals is the first step in turning the invisible into the visible.', 'Tony Robbins'],
    ["The question isn't who is going to let me; it's who is going to stop me.", 'Ayn Rand'],
    ["Good, better, best. Never let it rest. 'Til your good is better and your better is best.", 'St. Jerome'],
    ["Hard work beats talent when talent doesn't work hard.", 'Tim Notke'],
    ['Deserve your dream.', 'Octavio Paz'],
    ["There's a way to do it better - find it.", 'Thomas A. Edison'],
    ['Things do not happen. Things are made to happen.', 'John F. Kennedy'],
    ['To be a good loser is to learn how to win.', 'Carl Sandburg'],
    ['Failure is the opportunity to begin again more intelligently.', 'Henry Ford'],
    ['Be gentle to all and stern with yourself.', 'Saint Teresa of Avila'],
    ['Accept the challenges so that you can feel the exhilaration of victory.', 'George S. Patton'],
    ["If you don't ask, you don't get.", 'Stevie Wonder'],
    ['When one must, one can.', 'Charlotte Whitton'],
    ['Your heaviest artillery will be your will to live. Keep that big gun going.', 'Norman Cousins'],
    ['Things work out best for those who make the best of how things work out.', 'John Wooden'],
    ['I am not a has-been. I am a will be.', 'Lauren Bacall'],
    ['Every exit is an entry somewhere else.', 'Tom Stoppard'],
    ['Motivation will almost always beat mere talent.', 'Norman Ralph Augustine'],
    ["Great things come to those who don't wait.", 'Unknown'],
    ["You can't cross the sea merely by standing and staring at the water.", 'Rabindranath Tagore'],
    ['You create your opportunities by asking for them.', 'Shakti Gawain'],
    ['You have to make it happen.', 'Denis Diderot'],
    ['Only the educated are free.', 'Epictetus'],
    ["Go big or go home. Because it's true. What do you have to lose?", 'Eliza Dushku'],
    ["You just can't beat the person who never gives up.", 'Babe Ruth'],
    ['The more things you do, the more you can do.', 'Lucille Ball'],
    ];

    if(typeof(window.best) === 'undefined'){
        window.best = best;
    }
    
}(window));
