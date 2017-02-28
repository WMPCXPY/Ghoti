var app = new Vue({
        el: '#test',
        data: {
            tests: []
        },
        methods: {
            add: function (question, correct, a, b, c, d, e) {
                var showc = 'hidden';
                var showd = 'hidden';
                var showe = 'hidden';
                if (c.length > 0) {
                    showc = 'hiddens';
                }
                if (d.length > 0) {
                    showd = 'hiddens';
                }
                if (e.length > 0) {
                    showe = 'hiddens';
                }
                var thatquestion = {
                    question: question,
                    a: a,
                    b: b,
                    c: c,
                    showc: showc,
                    d: d,
                    showd: showd,
                    e: e,
                    showe: showe,
                    sol: [false, false, false, false, false],
                    correct: correct - 1,
                    correctorwrong: '-'
                }
                this.tests.push(thatquestion);
            },
            grade: function () {
                for (var i = 0; i < this.tests.length; i++) {
                    if (this.tests[i].sol[this.tests[i].correct] == true) {
                        this.tests[i].correctorwrong = 'Correct';
                    } else {
                        this.tests[i].correctorwrong = 'Wrong';
                    }
                }
            },
            gradethis: function (i) {
                if (i.sol[i.correct] == true) {
                    i.correctorwrong = 'Correct';
                } else {
                    i.correctorwrong = 'Wrong';
                }
            }
        }
    });
    // 1-10
    app.add('1.1 What two qualities set Theatre apart from other art forms?', 1, 'Immediacy and Presence',
        'Loudness and Brightness ', 'Presence and Sparkle ', 'Immediacy and Listening', '');
    app.add('1.2 How many attendance points are available each class period?', 3, '5', '10', '20', '50', '');
    app.add('1.3 The word THEATRE come from the Greek word Theatron which means', 2, 'Auditorium ', 'Seeing Place ',
        'Gathering Place ', 'Cineplex', '');
    app.add('1.4 How many ISU Theatre performances are you required to attend this semester?', 1, '2', '3', '1', '6',
        '');
    app.add('1.5 Unlike other art forms Theatre engages us by telling stories about....', 4, 'Human Beings',
        'Ancestors ', 'The Gods ', 'All of the Above', '');
    app.add('1.6 Is there extra credit available in this class?', 1, 'Yes', 'No', '', '', '');
    app.add(
        '1.7 \"All the worlds a stage, and all the men and women merely players.\" This is a quote from a play written by...',
        4, 'Moliere ', 'Simon ', 'Tennessee Williams ', 'William Shakespeare', '');
    app.add('1.8 The three things needed for a theatrical production to take place are:', 3,
        'Directors / Designers / Producers ', 'Theater / Play / Lights ', 'Actor / Space / Audience',
        '', '');
    app.add('1.9 Related to Theater as Seeing Place, Elizabethan theatre performers thought of the stage as a:', 1,
        'Mirror ', 'Pedestal ', 'A time machine ', 'a place of wealth', '');
    app.add('1.10 My instructor for this course is', 3, 'Jim Trenberth ', 'Stephen Leath',
        'Kelly Marie Schaefer ', 'I have no idea', '');
    // 1-10
    app.add('2.1 What is the correct way to spell Theatre?', 3, 'TheatER ', 'TheatRE ',
        'Both A and B are correct depending on context.', '', '');
    app.add('2.2 In Greek, the word Drama means...', 2, 'To Be ', 'To Do ', 'To Think ', 'To Overact',
        '');
    app.add('2.3 Theatre means', 4, 'A place to see drama ', 'The occupation of the artists ', 'A body of ideas ',
        'All of the above', '');
    app.add('2.4 A Thrust Stage set up looks like', 3, 'Audience on one side of the stage ', 'No Audience at all ',
        'Audience on three sides of the stage ', 'Audience surrounding the stage', '');
    app.add('2.5 All of the following are examples of theatre stage styles except for', 1, 'Living Room Staging ',
        'Arena Staging ', 'Proscenium Staging ', 'Thrust Staging', '');
    app.add('2.6 A theatrical producer is responsible for', 5, 'Hiring the Director ', 'Fundraising ',
        'Marketing ', 'Dealing with legal matters ', 'All of the above');
    app.add('2.7 A Costume Designer is responsible for', 4, 'Finding fabrics ',
        'Making sure the costume fits properly ',
        'Drawing pictures of how the costumes will look when finished ', 'All of the above', '');
    app.add('2.8 The job of the director is controlling and developing the artistic production of a show.', 1,
        ' A True ', 'False', '', '', '');
    app.add('2.9 According to the Set Designer in the video from Tuesdays lecture a good set designer must be a good',
        3, 'Painter', 'Architect ', 'Story Teller', 'Reader', '');
    app.add(
        '2.10 A Black Box Theatre is a flexible space that can be set up with any style of seating depending upon the needs of the production.',
        1, 'True ', 'False', '', '', '');
    // 1-10
    app.add('3.1 What is the artistic medium of Theatre? (Theatre is created by using......)', 1, 'Impersonation ',
        'The Body ', 'The Voice ', 'The Play', '');
    app.add('3.2 What physical object is used to separate the actor from the character being portrayed?', 2, 'Film ',
        'Mask ', 'Sunglasses ', 'Screen', '');
    app.add('3.3 "An Action or series of actions taken for the benefit of someone else." This is the definition of ...',
        3, 'Improvisation ', 'Fraud ', 'Performance ', 'Strategy', '');
    app.add('3.4 What are the two modes of performance?', 1, 'Presentational and Representational ',
        'Feigned and Indifferent ', 'Tragedy and Comedy ', 'Good and Evil', '');
    app.add(
        '3.5 What theatrical term means that an audience is willing to sacrifice its knowledge of what is real for the sake of entertainment and enjoyment?',
        2, 'Identification ', 'Willing suspension of disbelief ', 'Personification ',
        'Paradox of the Actor', '');
    app.add(
        '3.6 The mode of performance where the actors constantly acknowledge the audience, joke with them and make fun of them is called...',
        1, 'Presentational ', 'Representational', '', '', '');
    app.add('3.7 The fourth wall in theatre refers to...', 1,
        'Imaginary wall that separates the world of the stage from the audience. ',
        'A special set piece for spying on the audience. ',
        'A term for when the audience empathizes with the characters in a play. ', 'All of the above',
        '');
    app.add(
        '3.8 One of the forces at work in live theatre where each performance is taking place right now, live; and therefore anything can happen even mistakes, is called...',
        4, 'Presence ', 'Worry ', 'Rehearsal ', 'Immediacy', '');
    app.add(
        '3.9 Which mode of performance allows the audience to watch the events on stage unfold as if no audience were present is called.....',
        2, 'Presentational ', 'Representational', '', '', '');
    app.add(
        '3.10 When an actor has perfected their performance so that the character seems to live before the audience while the real person has no life at all is called...',
        3, 'Rehearsal', 'Persona ', 'The paradox of the actor ', 'Deus ex machina', '');
    // 1-10
    app.add('4.1 What is a Play?', 4, 'The basic unit of theatre', 'Action ', 'The performance that is seen ',
        'All of the above', '');
    app.add('4.2 Plays can be classified in two main ways', 1, 'Duration and Genre ', 'Funny and Serious ',
        'Modern and Historical ', 'Representational and Presentational', '');
    app.add('4.3 In Theatrical terms, what is an Act?', 2, 'A Moment ',
        'A unit of action; a major section of theatrical work ', 'A gesture ', 'A method of learning',
        '');
    app.add('4.4 Comedy, Tragedy, Melodrama, Tragicomedy and Farce are all examples of Genres of plays.', 1, 'True ',
        'False', '', '', '');
    app.add('4.5 The carrier of the action is referred to as what kind of character?', 2, 'Antagonist',
        'Protagonist ', 'Cameo ', 'Supporting', '');
    app.add(
        '4.6 A farce is a genre of play that uses broad physical humor such as a pie in the face or slipping on a banana peel.',
        1, 'True ', 'False', '', '', '');
    app.add(
        '4.7 A play that focused on a character of high stature suffering a decline in fortune and eventual death is called...',
        3, 'Comedy ', 'Melodrama ', 'Tragedy ', 'Tragicomedy', '');
    app.add('4.8 The first two theatrical genres were....', 4, 'Musicals and interpretive dance ',
        'Melodrama and Farce ', 'Absurdist and Epic ', 'Tragedy and Comedy', '');
    app.add('4.9 The genre of Comedy id focused on:', 5, 'Making the audience laugh ',
        'Ending with a celebration to show that society has endured ',
        'Being topical, focusing on what is happening in society now ', 'The life of the average person. ',
        'All of the above');
    app.add(
        '4.10 This split genre remains serious in nature but mixes in funny moments and has a satisfying, almost happy, ending.',
        2, 'Farce ', 'Tregicomedy', 'Melodrama ', 'Tragedy', '');
    // 1-10
    app.add('5.1	Aristotle is the author of the earliest surviving work of dramatic theory. What is this work called?',
        2, 'I Love Plays ', 'The Poetics ', 'Play Analysis ', 'The Seeing Place', '');
    app.add('5.2	Plot, Characters, Theme, Diction, Music, Spectacle. As a group these are known as....', 1,
        'Components of a Play ', 'Modes of Performance ', 'Genres ', 'Names of Characters in The Poetics',
        '');
    app.add('5.3	The term that refers to the structure of actions within a play is...', 3, 'Drama ', 'Music ',
        'Plot ', 'Schematics', '');
    app.add('5.4	The two primary demands of plot structure are:', 2, 'Drama and Humor ', 'Logic and Suspense ',
        'Comedy and Tragedy ', 'Presentational and Representational', '');
    app.add('5.5	A plays intellectual content is referred to as...', 3, 'Plot ', 'Cerebral ', 'Theme ',
        'Spectacle', '');
    app.add(
        '5.6	The Diction of a play refers to the literary character of the text; Its tone, imagery, cadence, figures of speech and dialect.',
        1, 'True ', 'False', '', '', '');
    app.add('5.7	The visual aspects of a theatrical production are referred to as...', 3, 'Music ', 'Plot ',
        'Spectacle ', 'Character', '');
    app.add('5.8	A shorthand communication, or agreement between actors and audience is called...', 4, 'Plot ',
        'Diction ', 'Characters ', 'Theatrical Convention', '');
    app.add('5.9	Staged violence or stage combat is an example of a Theatrical Convention.', 1, 'True ', 'False',
        '', '', '');
    app.add('5.10	The use of stage songs and sound effects within a play is making use of which component of a play?',
        1, 'Music ', 'Plot ', 'Character ', 'Spectacle', '');
    // 1-10
    app.add('6.1Pre play, Play proper, and Post Play are sections of...', 2, 'Theatrical Performance ',
        'Dramatic Timeline ', 'Play event ', 'Afternoon of Theatre', '');
    app.add(
        '6.2 Some would argue that the most important part of the Pre Play is attracting audiences. How is this done?',
        5, 'Social Media ', 'Posters ', 'Brochures ', 'Commercials', 'All of the Above');
    app.add('6.3 Historically producers would attract audiences by having a parade or raising a flag on the theater.',
        1, 'True ', 'False', '', '', '');
    app.add(
        '6.4 The background information the audience must have in order to understand unfolding events in the play, is referred to as....',
        3, 'Climax ', 'Denouement ', 'Exposition ', 'Rising Action', '');
    app.add('6.5 Prologue and Exposition fill the same function within a play.', 1, 'True', 'False', '',
        '', '');
    app.add('6.6 The event of decision that begins the problem within a play is called...', 2, 'Equilibrium ',
        'Inciting Incident ', 'Moment of Truth ', 'Denouement', '');
    app.add('6.7 Plot can only hold suspense when it involves...', 1, 'Choices ', 'Structure ', 'Mystery ',
        'Serenity', '');
    app.add('6.8 Once conflict is introduced it intensifies to a crisis level. This intensification is called...', 2,
        'Inciting Incident ', 'Rising Action ', 'Denouement ', 'Exposition', '');
    app.add('6.9 __ indicates that the play\'s action is now stilled and a new harmony and balance have been reached.',
        3, 'Exposition ', 'Climax ', 'Denouement ', 'Conflict', '');
    app.add('6.10 The post play is important because...', 5, 'It reverses the \'paradox of the actor\' ',
        'audiences can end their suspension of disbelief ', 'Conversations about the pay begin ',
        'Theatre critics review the play ', 'All of the above');
    // 1-10
    app.add('7.1 An important characteristic in Playwrights is their___.', 2, 'Degree ', 'Independence ',
        'Handwriting ', 'Logic', '');
    app.add('7.2 A Playwright\'s script is only considered finished when it is ___.', 3, 'Published ',
        'Sold over one million copies ', 'In performance ', 'a Tony award winner', '');
    app.add('7.3 A Playwright\'s script is considered to be a for the play.', 1, 'Blueprint ', 'suggestion ',
        'jumping off point ', 'unnecessary', '');
    app.add('7.4 What two tools does a playwright use to create a play?', 2, 'A pen and paper ',
        'Dialogue and Physical Action ', 'A computer and the internet ', 'Comedy and Tragedy', '');
    app.add('7.5 The core of every play is __.', 3, 'words ', 'ideas ', 'action ', 'location', '');
    app.add(
        '7.6 Credibility and Intrigue work together as qualities of playwriting. It is said, \"Intrigue draws us into the world of the play, credibility keeps us there.\"',
        1, 'True', 'False', '', '', '');
    app.add(
        '7.7 The quality of playwriting that is an audience imposed demand which requires a play\'s actions to flow logically from its characters, events and theatrical content is called__.',
        3, 'Intrigue ', 'Speakability ', 'Credibiity ', 'Flow', '');
    app.add(
        '7.8 "A line of dialogue is written in such a way as to achieve maximum impact when spoken." This is the definition of: ',
        2, 'Stageability ', 'Speakability ', 'Credibility ', 'Flow', '');
    app.add(
        '7.9 "Dialogue must be written so it can be spoken effectively on stage, during a staged situation." This is the definition of:',
        1, 'Stageability ', 'Speakability ', 'Intrigue ', 'Flow', '');
    app.add(
        '7.10 __requires a continual stream of information; it must be continually saying, doing and meaning something to the audience.',
        2, 'Intrigue ', 'Flow ', 'Speakability ', 'Tragedy', '');
    // 1-10
    app.add(
        '8.1 The quality of playwriting that leaves the audience with a sense of satisfaction and comfort; it also gives the play authority and specificity.',
        3, 'Caracterization ', 'Flow ', 'Richness ', 'Pertinence', '');
    app.add(
        '8.2 This quality of playwriting means that every character has an independence of intention, expression and motivation.',
        4, 'Richness ', 'Gravity ', 'Pertinence ', 'Depth of Characterization', '');
    app.add('8.3 "A play\'s theme is one of serious and significance." This defines which quality of playwriting?', 1,
        'Gravity ', 'Depth of Characterization ', 'Speakability ', 'Flow', '');
    app.add('8.4 "The play touches on current audience concerns" Defines which quality of playwriting?', 1,
        'Pertinence ', 'Richness ', 'Speakability ', 'Dialogue', '');
    app.add(
        '8.5 The playwrights skill at condensing a story from chronological time into a theatrical time frame, is known as ?',
        3, 'Richness ', 'Depth of Characterization ', 'Compression ', 'Intensity', '');
    app.add(
        '8.6 The definition of Economy is: The playwrights skill at eliminating or consolidating characters, events, locales and words.',
        1, 'True', 'False', '', '', '');
    app.add(
        '8.7 The quality of playwriting that conveys to the audience a feeling that this moment of theatre is unique and its revelations are profound.',
        3, 'Compression ', 'Richness ', 'Intensity ', 'Gravity', '');
    app.add('8.8 Compression and Economy lead to?', 2, 'Speakability ', 'Intensity ', 'Gravity ', 'Trouble',
        '');
    app.add(
        '8.9 "It is important to remember that every character is, in their own mind, an important and worthwhile person; regardless of what other characters think." This phrase is referring to what quality of playwriting?',
        1, 'Depth of Characterization ', 'Richness ', 'Gravity ', 'Flow', '');
    app.add(
        '8.10 Intensity evolves out of careful development of events, increasing urgency of character goals and focused actions of the plot.',
        1, 'True', 'False', '', '', '');
    // 1-10
    app.add(
        '9.1 When creating a character externally the actor is concentrating on how a character walks, talks, and behaves.',
        1, 'True ', 'False', '', '', '');
    app.add(
        '9.2 Substituting remembered situations from an actor\'s own life into the action of the play in order to have truthful emotions in performance is called?',
        3, 'Motivation ', 'External ', 'Emotion Memory ', 'Subtext', '');
    app.add(
        '9.3 When an actor focuses on experiencing the feelings and thinking the thoughts of the character they are creating their character __.',
        2, 'Externally ', 'Internally ', 'Dramatic Style ', 'Mime', '');
    app.add(
        '9.4 When actors study the techniques of Articulation, Resonance, Projection and Dialects they are training what part of their instrument?',
        2, 'Language ', 'Voice ', 'Historical research ', 'Stage Combat', '');
    app.add('9.5 What notion of acting is the best to study?', 3, 'Only External ', 'Only Internal ',
        'Both Internal and External ', 'A masters degree in Psychology', '');
    app.add('9.6 "Our prime task is to create the life of our character." Who created this theory of acting?', 3,
        'Kelly Schaefer ', 'Emma Thompson ', 'Konstantin Stanislavsly ', 'Aristotle', '');
    app.add(
        '9.7 What your character wants, their goal. The thing that focuses all their action in the play. This is the definition of?',
        2, 'Subtext ', 'Objective ', 'Internal ', 'Persuasion', '');
    app.add('9.8 The content under the dialogue. The unspoken thoughts of the character. This is the definition of?', 3,
        'Objective ', 'Motivation ', 'Subtext ', 'Memory', '');
    app.add('9.9 The actions a character does in pursuit of their objective is called _.', 2, 'Subtext ', 'Tactics ',
        'Memory ', 'Hurdles', '');
    app.add('9.10 Why? This is the question an actor asks when searching for a character\'s __.', 1, 'Motivation ',
        'Objective ', 'Internal ', 'Emotion', '');
