const pages = {
    '/': () => `
        <!-- Hero Section -->
        <section class="hero" style="background-image: url('soft_worship_background.png'); background-size: cover; background-position: center;">
            <div style="position: absolute; top:0; left:0; right:0; bottom:0; background: rgba(10, 25, 47, 0.7); z-index: 0;"></div>
            <div class="hero-content fade-in">
                <h1 class="hero-title" style="font-family: var(--font-heading);">Welcome to Church at Bethany</h1>
                <p class="hero-subtitle" style="color: var(--bg-white); opacity: 0.95; margin-bottom: 1.5rem;">A place of prayer, worship and spiritual growth</p>
                
                <!-- Hero Verse -->
                <div style="color: var(--bg-white); font-family: var(--font-heading); font-style: italic; margin-bottom: 2.5rem; opacity: 0.9;">
                    <p style="font-size: 1.25rem; margin-bottom: 0.5rem;">&ldquo;Whatever you do, do it all for the glory of God.&rdquo;</p>
                    <p style="font-size: 0.9rem; font-style: normal; font-weight: 600; opacity: 0.8;">— 1 Corinthians 10:31</p>
                </div>

                <div class="hero-buttons">
                    <a href="#/live" class="btn btn-primary"><i data-lucide="video"></i> Watch Live Service</a>
                    <a href="#/prayer" class="btn btn-blue text-white"><i data-lucide="heart"></i> Submit Prayer Request</a>
                </div>
            </div>
        </section>
        


        <!-- About the Church Section -->
        <section id="about" class="section bg-white">
            <div class="container text-center fade-in">
                <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">About the Church</h2>

                <!-- Acts 2:42 Scripture Card -->
                <div class="scripture-hebron-card fade-in" style="margin-bottom: 2.5rem;">
                    <blockquote>&ldquo;They devoted themselves to the apostles&rsquo; teaching and to fellowship, to the breaking of bread and to prayer.&rdquo;</blockquote>
                    <cite>— Acts 2:42</cite>
                </div>

                <div class="card mx-auto" style="max-width: 800px; padding: 3rem; text-align: center;">
                    <i data-lucide="church" class="text-gold mx-auto" style="width: 48px; height: 48px; margin-bottom: 1.5rem;"></i>
                    <p class="text-muted" style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">
                        Church at Bethany is a place of spiritual refuge, dedicated to prayer, spreading the truth of the Gospel, and nurturing believers in their faith journey.
                    </p>
                    <p class="text-muted" style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">
                        Our foundation is built upon the faithful teachings and prayerful ministry of our founder, <strong>Brother N. Rajanna</strong>. His dedication established this fellowship, which continues to grow and bless the community of Narasaraopet today.
                    </p>
                    <p class="text-muted" style="font-size: 1.125rem; line-height: 1.8;">
                        Today, the church is graciously led by our Pastor, <strong>Brother N. Samuel Rajanna</strong>, alongside his wife, Hand Maiden <strong>Sister N. Swapna Samuel</strong>, who continue the vision of building a strong, faith-filled community.
                    </p>
                    <!-- Influence of Hebron Ministry -->
                    <div style="margin-top: 3rem;">
                        <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--primary-blue); font-family: var(--font-heading);">Influence of Hebron Ministry</h2>
                        <div class="card" style="padding: 3rem; box-shadow: var(--shadow-lg); border: none; max-width: 800px; margin: 0 auto; text-align: center;">
                            <i data-lucide="book-open" class="text-gold mx-auto" style="width: 48px; height: 48px; margin-bottom: 1.5rem;"></i>
                            <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: var(--text-muted);">
                                Hebron Ministry has been a source of spiritual encouragement and Biblical teaching for many believers. The ministry was led by <strong>Brother Paul Bakth Singh</strong>, a devoted servant of God from India who dedicated his life to preaching the Gospel and teaching the Word of God.
                            </p>
                            <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: var(--text-muted);">
                                Brother Paul Bakth Singh emphasized the importance of prayer, deep study of the Scriptures, and strong fellowship among believers. Through Bible conferences, teaching ministries, and gatherings, many Christians across India were strengthened in their faith.
                            </p>
                            <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-muted);">
                                His teachings encouraged believers to build their lives on the Word of God and to grow in unity, prayer, and discipleship.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Leadership Section -->
        <section id="leadership" class="section bg-gray">
            <div class="container fade-in">
                <div class="text-center mb-8">
                    <h2 style="font-size: 2.5rem;">Church Leadership</h2>
                    <p class="text-muted" style="font-size: 1.125rem;">Dedicated servants guiding our congregation in faith</p>
                </div>

                <!-- Leadership Bible Verse -->
                <div class="scripture-section-verse fade-in">
                    <blockquote>&ldquo;Christ is the head of the church, his body, of which he is the Savior.&rdquo;</blockquote>
                    <cite>— Ephesians 5:23</cite>
                </div>
                
                <div class="grid grid-cols-3">
                    <!-- Founder Card -->
                    <div class="card text-center fade-in delay-1" style="padding: 2.5rem 1.5rem;">
                        <img src="assets/founder.jpg" alt="Brother N. Rajanna" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin: 0 auto 1.5rem auto; border: 4px solid var(--accent-gold); box-shadow: var(--shadow-md);">
                        <h3 class="card-title" style="margin-bottom: 0.5rem; font-size: 1.25rem;">Brother N. Rajanna</h3>
                        <p class="text-gold uppercase" style="font-size: 0.875rem; font-weight: 600; letter-spacing: 1px;">Founder</p>
                    </div>

                    <!-- Pastor Card -->
                    <div class="card text-center fade-in delay-2" style="padding: 2.5rem 1.5rem;">
                        <img src="assets/pastor.jpeg" alt="Brother N. Samuel Rajanna" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin: 0 auto 1.5rem auto; border: 4px solid var(--accent-gold); box-shadow: var(--shadow-md);">
                        <h3 class="card-title" style="margin-bottom: 0.5rem; font-size: 1.25rem;">Brother N. Samuel Rajanna <span style="font-size:1rem; opacity:0.8;">(G.S)</span></h3>
                        <p class="text-gold uppercase" style="font-size: 0.875rem; font-weight: 600; letter-spacing: 1px;">Pastor</p>
                    </div>

                    <!-- Pastor Wife Card -->
                    <div class="card text-center fade-in delay-3" style="padding: 2.5rem 1.5rem;">
                        <img src="assets/IMG_20260306_182521.jpg.jpeg" alt="Sister N. Swapna Samuel" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin: 0 auto 1.5rem auto; border: 4px solid var(--accent-gold); box-shadow: var(--shadow-md);">
                        <h3 class="card-title" style="margin-bottom: 0.5rem; font-size: 1.25rem;">Sister N. Swapna Samuel</h3>
                        <p class="text-gold uppercase" style="font-size: 0.875rem; font-weight: 600; letter-spacing: 1px;">Hand Maiden</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Schedule Section -->
        <section id="services" class="section bg-white">
            <div class="container fade-in">
                <div class="text-center mb-8">
                    <h2 style="font-size: 2.5rem;">Service Schedule</h2>
                    <p class="text-muted" style="font-size: 1.125rem;">Join us as we gather to worship and pray together</p>
                </div>
                
                <!-- Services Bible Verse -->
                <div class="scripture-section-verse fade-in">
                    <blockquote>&ldquo;And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together.&rdquo;</blockquote>
                    <cite>— Hebrews 10:24-25</cite>
                </div>
                
                <div class="grid grid-cols-3" style="max-width: 1000px; margin: 0 auto;">
                    
                    <a href="https://www.youtube.com/@bethanychurchnarasaraopet5648/live" target="_blank" rel="noopener noreferrer" class="card service-card fade-in delay-1" style="border-top: 4px solid var(--accent-gold); text-align: center; text-decoration: none; color: inherit; display: block; cursor: pointer;">
                        <i data-lucide="sun" class="text-gold mx-auto" style="width: 32px; height: 32px; margin-bottom: 1rem;"></i>
                        <h3 class="card-title" style="margin-bottom: 0.5rem;">Sunday Worship</h3>
                        <span class="text-blue font-bold" style="font-size: 1.25rem; display: block; margin-bottom: 0.5rem;">10:00 AM</span>
                        <p class="text-muted" style="font-size: 0.875rem;">Sunday</p>
                    </a>

                    <a href="https://www.youtube.com/@bethanychurchnarasaraopet5648" target="_blank" rel="noopener noreferrer" class="card service-card fade-in delay-2" style="border-top: 4px solid var(--primary-blue); text-align: center; text-decoration: none; color: inherit; display: block; cursor: pointer;">
                        <i data-lucide="moon" class="text-blue mx-auto" style="width: 32px; height: 32px; margin-bottom: 1rem;"></i>
                        <h3 class="card-title" style="margin-bottom: 0.5rem;">Church Prayer</h3>
                        <span class="text-blue font-bold" style="font-size: 1.25rem; display: block; margin-bottom: 0.5rem;">7:00 PM</span>
                        <p class="text-muted" style="font-size: 0.875rem;">Tuesday</p>
                    </a>

                    <a href="https://www.youtube.com/@bethanychurchnarasaraopet5648" target="_blank" rel="noopener noreferrer" class="card service-card fade-in delay-3" style="border-top: 4px solid var(--primary-blue); text-align: center; text-decoration: none; color: inherit; display: block; cursor: pointer;">
                        <i data-lucide="users" class="text-blue mx-auto" style="width: 32px; height: 32px; margin-bottom: 1rem;"></i>
                        <h3 class="card-title" style="margin-bottom: 0.5rem;">Young Girls Retreat</h3>
                        <span class="text-blue font-bold" style="font-size: 1.25rem; display: block; margin-bottom: 0.5rem;">7:00 PM</span>
                        <p class="text-muted" style="font-size: 0.875rem;">Wednesday</p>
                    </a>

                    <a href="https://www.youtube.com/@bethanychurchnarasaraopet5648" target="_blank" rel="noopener noreferrer" class="card service-card fade-in delay-1" style="border-top: 4px solid var(--primary-blue); text-align: center; text-decoration: none; color: inherit; display: block; cursor: pointer;">
                        <i data-lucide="book-open" class="text-blue mx-auto" style="width: 32px; height: 32px; margin-bottom: 1rem;"></i>
                        <h3 class="card-title" style="margin-bottom: 0.5rem;">Bible Study</h3>
                        <span class="text-blue font-bold" style="font-size: 1.25rem; display: block; margin-bottom: 0.5rem;">7:00 PM</span>
                        <p class="text-muted" style="font-size: 0.875rem;">Thursday</p>
                    </a>

                    <a href="https://www.youtube.com/@bethanychurchnarasaraopet5648" target="_blank" rel="noopener noreferrer" class="card service-card fade-in delay-2" style="border-top: 4px solid var(--primary-blue); text-align: center; text-decoration: none; color: inherit; display: block; cursor: pointer;">
                        <i data-lucide="activity" class="text-blue mx-auto" style="width: 32px; height: 32px; margin-bottom: 1rem;"></i>
                        <h3 class="card-title" style="margin-bottom: 0.5rem;">Fasting Prayer</h3>
                        <span class="text-blue font-bold" style="font-size: 1.25rem; display: block; margin-bottom: 0.5rem;">10:00 AM</span>
                        <p class="text-muted" style="font-size: 0.875rem;">Saturday</p>
                    </a>

                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <section id="gallery" class="section bg-gray">
            <div class="container fade-in">
                <div class="text-center mb-8">
                    <h2 style="font-size: 2.5rem;">Church Gallery</h2>
                    <p class="text-muted" style="font-size: 1.125rem;">Glimpses of our life and worship together</p>
                </div>

                <!-- Gallery Bible Verse -->
                <div class="scripture-section-verse fade-in">
                    <blockquote>&ldquo;Make a joyful noise unto the Lord, all the earth.&rdquo;</blockquote>
                    <cite>— Psalm 100:1</cite>
                </div>
                
                <div class="gallery-grid">
                    <div class="gallery-item fade-in delay-1">
                        <img src="assets/founder.jpg" alt="Brother N. Rajanna">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-2">
                        <img src="assets/pastor.jpeg" alt="Brother N. Samuel Rajanna">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-3">
                        <img src="assets/IMG_20260306_182521.jpg.jpeg" alt="Sister N. Swapna Samuel">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-1">
                        <img src="assets/gallery-1.jpeg" alt="Church Activity">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-2">
                        <img src="assets/gallery-2.jpeg" alt="Church Worship">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-3">
                        <img src="assets/gallery-3.jpeg" alt="Church Event">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-1">
                        <img src="assets/gallery-4.jpeg" alt="Church Community">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-2">
                        <img src="assets/gallery-5.jpeg" alt="Church Gathering">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-3">
                        <img src="assets/gallery-6.jpeg" alt="Church Service">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-3">
                        <img src="assets/gallery-9.jpeg" alt="Pastoral Service">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                    <div class="gallery-item fade-in delay-1">
                        <img src="assets/gallery-10.jpeg" alt="Sunday Worship">
                        <div class="gallery-overlay"><i data-lucide="maximize-2"></i></div>
                    </div>
                </div>
            </div>
            
            <!-- Lightbox container -->
            <div id="lightbox" class="lightbox">
                <button class="lightbox-close"><i data-lucide="x"></i></button>
                <div class="lightbox-content">
                    <img id="lightbox-img" src="" alt="Gallery Image Expanded">
                </div>
            </div>
        </section>
    `,
    '/about': () => `
        <div class="page-header fade-in">
            <div class="container">
                <h1>About Bethany Prayer House</h1>
                <p>Growing in faith, grounded in the Word of God.</p>
            </div>
        </div>
        <section class="section bg-gray fade-in">
            <div class="container" style="max-width: 800px; text-align: center;">
                <div class="card" style="padding: 4rem; box-shadow: var(--shadow-lg); border: none;">
                    <i data-lucide="cross" class="text-gold mx-auto" style="width: 64px; height: 64px; margin-bottom: 2rem;"></i>
                    <p style="font-size: 1.25rem; line-height: 1.8; margin-bottom: 2rem; color: var(--text-dark);">
                        Bethany Prayer House is a Christian fellowship located in Narasaraopet, Andhra Pradesh.
                    </p>
                    <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 2rem; color: var(--text-muted);">
                        Our mission is to preach the Gospel of Jesus Christ, teach the Word of God faithfully, and help believers grow spiritually.
                    </p>
                    <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 2rem; color: var(--text-muted);">
                        Building on the legacy of our founder, Brother N. Rajanna, our church is now under the dedicated leadership of Pastor <strong>Brother N. Samuel Rajanna</strong> and Hand Maiden <strong>Sister N. Swapna Samuel</strong>. Together, they shepherd our congregation with love and devotion.
                    </p>
                    <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-muted);">
                        We gather for worship, prayer, Bible study, and fellowship to build a strong Christian community centered on God's Word. <strong>Everyone is welcome.</strong>
                    </p>
                </div>

                <!-- Influence of Hebron Ministry -->
                <div class="container text-center fade-in" style="max-width: 800px; margin-top: 3rem;">
                    <h2 style="font-size: 2rem; margin-bottom: 1.5rem; color: var(--primary-blue); font-family: var(--font-heading);">Influence of Hebron Ministry</h2>
                    <div class="card" style="padding: 3rem; box-shadow: var(--shadow-lg); border: none;">
                        <i data-lucide="book-open" class="text-gold mx-auto" style="width: 48px; height: 48px; margin-bottom: 1.5rem;"></i>
                        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: var(--text-muted);">
                            Hebron Ministry has been a source of spiritual encouragement and Biblical teaching for many believers. The ministry was led by <strong>Brother Paul Bakth Singh</strong>, a devoted servant of God from India who dedicated his life to preaching the Gospel and teaching the Word of God.
                        </p>
                        <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem; color: var(--text-muted);">
                            Brother Paul Bakth Singh emphasized the importance of prayer, deep study of the Scriptures, and strong fellowship among believers. Through Bible conferences, teaching ministries, and gatherings, many Christians across India were strengthened in their faith.
                        </p>
                        <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-muted);">
                            His teachings encouraged believers to build their lives on the Word of God and to grow in unity, prayer, and discipleship.
                        </p>
                    </div>

                    <!-- Acts 2:42 Scripture Card -->
                    <div class="scripture-hebron-card fade-in" style="margin-top: 2rem;">
                        <blockquote>&ldquo;They devoted themselves to the apostles&rsquo; teaching and to fellowship, to the breaking of bread and to prayer.&rdquo;</blockquote>
                        <cite>— Acts 2:42</cite>
                    </div>
                </div>

            </div>
        </section>
    `,


    '/contact': () => `
        <div class="page-header fade-in">
            <div class="container">
                <h1>Contact Us</h1>
                <p>Have questions? We'd love to hear from you.</p>
            </div>
        </div>
        <section class="section bg-gray fade-in">
            <div class="container">
                <div class="grid grid-cols-2" style="max-width: 1000px; margin: 0 auto; align-items: start;">
                    
                    <div class="card" style="box-shadow: none; border: none; background: transparent; padding: 0; height: auto;">
                        <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Get in Touch</h2>
                        
                        <a href="tel:08647232439" class="card" style="margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: center; border: none; box-shadow: var(--shadow-md); height: auto; text-decoration: none; color: inherit; cursor: pointer;">
                            <div class="card-icon" style="margin-bottom: 0; background: linear-gradient(135deg, var(--accent-gold) 0%, #EDC967 100%); width: 56px; height: 56px; color: var(--primary-blue);"><i data-lucide="phone"></i></div>
                            <div>
                                <h3 style="font-size: 1.125rem; font-family: var(--font-body); margin-bottom: 0.25rem; font-weight: 700;">Phone</h3>
                                <p class="text-muted" style="font-size: 1.125rem;">08647 232439</p>
                            </div>
                        </a>

                        <a href="mailto:bethanychurch01@gmail.com" class="card" style="margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: center; border: none; box-shadow: var(--shadow-md); height: auto; text-decoration: none; color: inherit; cursor: pointer;">
                            <div class="card-icon" style="margin-bottom: 0; background: linear-gradient(135deg, var(--accent-gold) 0%, #EDC967 100%); width: 56px; height: 56px; color: var(--primary-blue);"><i data-lucide="mail"></i></div>
                            <div>
                                <h3 style="font-size: 1.125rem; font-family: var(--font-body); margin-bottom: 0.25rem; font-weight: 700;">Email</h3>
                                <p class="text-muted" style="font-size: 1.125rem;">bethanychurch01@gmail.com</p>
                            </div>
                        </a>
                        
                        <a href="https://maps.google.com/?q=Gangamma+Temple+Lane,+Shalem+Nagar,+Narasaraopet,+Andhra+Pradesh+522601" target="_blank" rel="noopener noreferrer" class="card" style="margin-bottom: 1.5rem; display: flex; gap: 1rem; align-items: center; border: none; box-shadow: var(--shadow-md); height: auto; text-decoration: none; color: inherit; cursor: pointer;">
                            <div class="card-icon" style="margin-bottom: 0; background: linear-gradient(135deg, var(--accent-gold) 0%, #EDC967 100%); width: 56px; height: 56px; color: var(--primary-blue);"><i data-lucide="map-pin"></i></div>
                            <div>
                                <h3 style="font-size: 1.125rem; font-family: var(--font-body); margin-bottom: 0.25rem; font-weight: 700;">Address</h3>
                                <p class="text-muted" style="font-size: 1.125rem;">Gangamma Temple Lane, Shalem Nagar, Narasaraopet</p>
                            </div>
                        </a>
                    </div>

                    <div class="card fade-in delay-2" style="box-shadow: var(--shadow-lg); padding: 3rem; border: none;">
                        <form id="contactForm" style="display: flex; flex-direction: column; gap: 1.5rem;">
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" style="font-weight: 600;">Name</label>
                                <input type="text" name="name" class="form-control" required style="background: var(--bg-gray); border: none; padding: 1rem;">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" style="font-weight: 600;">Phone</label>
                                <input type="tel" name="phone" class="form-control" required style="background: var(--bg-gray); border: none; padding: 1rem;">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" style="font-weight: 600;">Email</label>
                                <input type="email" name="email" class="form-control" required style="background: var(--bg-gray); border: none; padding: 1rem;">
                            </div>
                            
                            <div class="form-group" style="margin-bottom: 0;">
                                <label class="form-label" style="font-weight: 600;">Message</label>
                                <textarea name="message" class="form-control" required style="background: var(--bg-gray); border: none; padding: 1rem; min-height: 120px;"></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.125rem; padding: 1rem;">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    `,
    '/live': () => `
        <div class="page-header fade-in">
            <div class="container">
                <h1>Live Worship Service</h1>
            </div>
        </div>
        <section class="section bg-gray fade-in">
            <div class="container text-center">

                <!-- Live Stream Bible Verse -->
                <div class="scripture-worship-verse fade-in">
                    <blockquote>&ldquo;Oh come, let us worship and bow down; let us kneel before the Lord our Maker.&rdquo;</blockquote>
                    <cite>— Psalm 95:6</cite>
                </div>

                <div class="card mx-auto" style="max-width: 800px; overflow: hidden; padding: 0; box-shadow: var(--shadow-lg); border: none; border-radius: 12px; background: var(--bg-white);">
                    <div style="position: relative; height: 350px; background-image: url('assets/live-thumbnail.jpg'); background-size: cover; background-position: center;">
                        <a href="https://www.youtube.com/@bethanychurchnarasaraopet5648/live" target="_blank" rel="noopener noreferrer" style="position: absolute; inset: 0; background: rgba(10, 25, 47, 0.4); display: flex; align-items: center; justify-content: center; text-decoration: none; transition: background 0.3s ease;" onmouseover="this.style.background='rgba(10, 25, 47, 0.2)'" onmouseout="this.style.background='rgba(10, 25, 47, 0.4)'">
                            <i data-lucide="play-circle" style="color: white; width: 80px; height: 80px; opacity: 0.9; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3));"></i>
                        </a>
                    </div>
                    <div style="padding: 3rem 2rem;">
                        <h2 style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary-blue); font-family: var(--font-heading);">Join Us Live</h2>
                        <p style="font-size: 1.125rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
                            Experience the presence of God from anywhere. We stream our Sunday Worship Services live so you can stay connected with our church family, even when you can't be here in person.
                        </p>
                        <a href="https://www.youtube.com/@bethanychurchnarasaraopet5648/live" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 1.125rem; padding: 1rem 2.5rem; border-radius: 8px;">
                            <i data-lucide="youtube" style="width: 24px; height: 24px;"></i> Watch on YouTube
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
    '/prayer': () => `
    <div class="page-header fade-in">
        <div class="container">
            <h1>Submit a Prayer Request</h1>
            <p>We believe in the power of prayer. Our church family would be honored to pray for you.</p>
        </div>
    </div>
    <section class="section fade-in" style="background-color: var(--bg-white);">
        <div class="container">

            <!-- Prayer Bible Verse -->
            <div class="scripture-prayer-card fade-in">
                <span class="verse-icon">🙏</span>
                <blockquote>&ldquo;Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.&rdquo;</blockquote>
                <cite>— Philippians 4:6</cite>
            </div>

            <div class="card" style="max-width: 500px; margin: 0 auto; padding: 2.5rem 2rem; background: var(--bg-white); box-shadow: var(--shadow-md); border-radius: 12px; border: 1px solid rgba(0,0,0,0.05);">
                <form id="prayerForm" style="display: flex; flex-direction: column; gap: 1.5rem;">
                    <div class="form-group" style="display: flex; flex-direction: column; text-align: left; margin-bottom: 0;">
                        <label class="form-label" style="font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">Name</label>
                        <input type="text" name="name" class="form-control" required style="width: 100%; background: var(--bg-gray); border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.875rem 1rem;">
                    </div>

                    <div class="form-group" style="display: flex; flex-direction: column; text-align: left; margin-bottom: 0;">
                        <label class="form-label" style="font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">Phone</label>
                        <input type="tel" name="phone" class="form-control" required style="width: 100%; background: var(--bg-gray); border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.875rem 1rem;">
                    </div>

                    <div class="form-group" style="display: flex; flex-direction: column; text-align: left; margin-bottom: 0;">
                        <label class="form-label" style="font-weight: 600; color: var(--text-dark); margin-bottom: 0.5rem;">Prayer Request Message</label>
                        <textarea name="message" class="form-control" required style="width: 100%; background: var(--bg-gray); border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; min-height: 150px; resize: vertical;"></textarea>
                    </div>

                    <button type="submit" class="btn" style="width: 100%; background-color: #1E3A8A; color: white; border-radius: 8px; padding: 1rem; font-size: 1.125rem; font-weight: 600; border: none; cursor: pointer; transition: all 0.2s ease; margin-top: 0.5rem;" onmouseover="this.style.transform='translateY(-2px)'; this.style.opacity='0.9';" onmouseout="this.style.transform='none'; this.style.opacity='1';">Submit</button>
                </form>
            </div>
        </div>
    </section>
`,
    '/404': () => `
    <div class="page-header" style="min-height: 50vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div class="container text-center">
            <i data-lucide="alert-circle" class="text-gold" style="width: 64px; height: 64px; margin-bottom: 1rem;"></i>
            <h1 style="font-size: 4rem;">404</h1>
            <p style="font-size: 1.5rem; margin-bottom: 2rem;">Page not found</p>
            <a href="#/" class="btn btn-outline text-white">Return to Home</a>
        </div>
    </div>
    `
};
