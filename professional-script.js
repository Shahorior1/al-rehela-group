// Professional Service Information Database
const serviceDetails = {
    manpower: {
        title: "Manpower Supply Services",
        content: `
            <h3>Professional Workforce Solutions</h3>
            <p>Al Rehela Group provides skilled and experienced manpower for all construction needs across the UAE.</p>
            
            <h3>Our Services Include:</h3>
            <ul>
                <li><strong>Skilled Labor:</strong> Carpenters, Masons, Electricians, Plumbers</li>
                <li><strong>Technical Staff:</strong> Site Engineers, Supervisors, Foremen</li>
                <li><strong>General Workers:</strong> Laborers, Helpers, Cleaners</li>
                <li><strong>Specialized Trades:</strong> Steel fixers, Tile fixers, Painters</li>
            </ul>
            
            <h3>Why Choose Our Manpower?</h3>
            <ul>
                <li>✓ Fully trained and certified professionals</li>
                <li>✓ Safety-oriented workforce</li>
                <li>✓ Flexible deployment options</li>
                <li>✓ Competitive rates</li>
                <li>✓ 24/7 support and supervision</li>
            </ul>
            
            <p><strong>Contact us today for customized manpower solutions for your project!</strong></p>
        `
    },
    gypsum: {
        title: "Gypsum Installation Services",
        content: `
            <h3>Professional Gypsum Board Installation</h3>
            <p>Expert gypsum board installation services for residential, commercial, and industrial projects.</p>
            
            <h3>Our Gypsum Services:</h3>
            <ul>
                <li><strong>Ceiling Systems:</strong> Suspended ceilings, decorative designs</li>
                <li><strong>Wall Partitions:</strong> Interior walls, office partitions</li>
                <li><strong>Decorative Elements:</strong> Arches, columns, cornices</li>
                <li><strong>Acoustic Solutions:</strong> Sound-proof installations</li>
            </ul>
            
            <h3>Quality Features:</h3>
            <ul>
                <li>✓ Fire-resistant materials</li>
                <li>✓ Moisture-resistant options</li>
                <li>✓ Perfect finishing</li>
                <li>✓ Quick installation</li>
                <li>✓ Cost-effective solutions</li>
            </ul>
        `
    },
    interior: {
        title: "Interior Design Services",
        content: `
            <h3>Complete Interior Design Solutions</h3>
            <p>Transform your space with our professional interior design and fit-out services.</p>
            
            <h3>Design Services:</h3>
            <ul>
                <li><strong>Space Planning:</strong> Optimal layout design</li>
                <li><strong>3D Visualization:</strong> Realistic project previews</li>
                <li><strong>Material Selection:</strong> Quality finishes and fixtures</li>
                <li><strong>Custom Furniture:</strong> Bespoke furniture solutions</li>
            </ul>
            
            <h3>Specializations:</h3>
            <ul>
                <li>✓ Residential interiors</li>
                <li>✓ Office spaces</li>
                <li>✓ Retail environments</li>
                <li>✓ Restaurant & hospitality</li>
                <li>✓ Healthcare facilities</li>
            </ul>
        `
    },
    electrical: {
        title: "Electrical Works",
        content: `
            <h3>Professional Electrical Services</h3>
            <p>Complete electrical installation and maintenance services by certified electricians.</p>
            
            <h3>Electrical Services:</h3>
            <ul>
                <li><strong>Power Systems:</strong> Main distribution boards, sub-panels</li>
                <li><strong>Lighting Solutions:</strong> LED, decorative, emergency lighting</li>
                <li><strong>Safety Systems:</strong> Fire alarms, security systems</li>
                <li><strong>Smart Solutions:</strong> Home automation, smart switches</li>
            </ul>
            
            <h3>Our Expertise:</h3>
            <ul>
                <li>✓ Licensed and certified electricians</li>
                <li>✓ Safety compliance standards</li>
                <li>✓ Energy-efficient solutions</li>
                <li>✓ 24/7 emergency services</li>
                <li>✓ Warranty on all work</li>
            </ul>
        `
    },
    civil: {
        title: "Civil Works",
        content: `
            <h3>Comprehensive Civil Construction</h3>
            <p>Complete civil engineering and construction services for all types of projects.</p>
            
            <h3>Civil Services:</h3>
            <ul>
                <li><strong>Foundation Work:</strong> Excavation, concrete pouring</li>
                <li><strong>Structural Work:</strong> Columns, beams, slabs</li>
                <li><strong>Masonry:</strong> Block work, brick laying</li>
                <li><strong>Finishing:</strong> Plastering, waterproofing</li>
            </ul>
            
            <h3>Project Types:</h3>
            <ul>
                <li>✓ Residential buildings</li>
                <li>✓ Commercial complexes</li>
                <li>✓ Industrial facilities</li>
                <li>✓ Infrastructure projects</li>
                <li>✓ Renovation works</li>
            </ul>
        `
    },
    mep: {
        title: "MEP Works",
        content: `
            <h3>Mechanical, Electrical & Plumbing</h3>
            <p>Integrated MEP services for modern buildings and facilities.</p>
            
            <h3>MEP Services:</h3>
            <ul>
                <li><strong>HVAC Systems:</strong> Air conditioning, ventilation</li>
                <li><strong>Plumbing:</strong> Water supply, drainage systems</li>
                <li><strong>Fire Fighting:</strong> Sprinkler systems, fire pumps</li>
                <li><strong>Electrical:</strong> Power distribution, lighting</li>
            </ul>
            
            <h3>Key Benefits:</h3>
            <ul>
                <li>✓ Energy-efficient systems</li>
                <li>✓ Smart building integration</li>
                <li>✓ Preventive maintenance</li>
                <li>✓ Code compliance</li>
                <li>✓ 24/7 support</li>
            </ul>
        `
    },
    painting: {
        title: "Painting Works",
        content: `
            <h3>Professional Painting Services</h3>
            <p>High-quality painting services for interior and exterior surfaces.</p>
            
            <h3>Painting Services:</h3>
            <ul>
                <li><strong>Interior Painting:</strong> Walls, ceilings, decorative finishes</li>
                <li><strong>Exterior Painting:</strong> Weather-resistant coatings</li>
                <li><strong>Specialized Coatings:</strong> Anti-corrosion, waterproof</li>
                <li><strong>Decorative Work:</strong> Texture painting, murals</li>
            </ul>
            
            <h3>Quality Assurance:</h3>
            <ul>
                <li>✓ Premium quality paints</li>
                <li>✓ Surface preparation</li>
                <li>✓ Professional application</li>
                <li>✓ Clean workspace</li>
                <li>✓ Warranty on all work</li>
            </ul>
        `
    },
    materials: {
        title: "Materials Supply",
        content: `
            <h3>Construction Materials Supply</h3>
            <p>Reliable supply of high-quality construction materials for all project needs.</p>
            
            <h3>Materials We Supply:</h3>
            <ul>
                <li><strong>Structural Materials:</strong> Steel, cement, aggregates</li>
                <li><strong>Finishing Materials:</strong> Tiles, marble, granite</li>
                <li><strong>MEP Materials:</strong> Pipes, cables, fittings</li>
                <li><strong>Hardware:</strong> Tools, fasteners, equipment</li>
            </ul>
            
            <h3>Our Advantages:</h3>
            <ul>
                <li>✓ Competitive pricing</li>
                <li>✓ Quality certification</li>
                <li>✓ Timely delivery</li>
                <li>✓ Technical support</li>
                <li>✓ Bulk order discounts</li>
            </ul>
        `
    },
    tiles: {
        title: "Tiles and Marble Fixing",
        content: `
            <h3>Professional Tile & Marble Installation</h3>
            <p>Expert installation of tiles, marble, and natural stone surfaces.</p>
            
            <h3>Installation Services:</h3>
            <ul>
                <li><strong>Floor Tiling:</strong> Ceramic, porcelain, natural stone</li>
                <li><strong>Wall Tiling:</strong> Kitchen, bathroom, feature walls</li>
                <li><strong>Marble Work:</strong> Flooring, countertops, cladding</li>
                <li><strong>Granite Installation:</strong> Kitchen counters, vanities</li>
            </ul>
            
            <h3>Craftsmanship:</h3>
            <ul>
                <li>✓ Precision cutting and fitting</li>
                <li>✓ Perfect alignment</li>
                <li>✓ Waterproof installation</li>
                <li>✓ Professional grouting</li>
                <li>✓ Lifetime durability</li>
            </ul>
        `
    },
    steel: {
        title: "Steel Works",
        content: `
            <h3>Structural Steel Works</h3>
            <p>Complete steel fabrication and installation services for construction projects.</p>
            
            <h3>Steel Services:</h3>
            <ul>
                <li><strong>Structural Steel:</strong> Beams, columns, trusses</li>
                <li><strong>Reinforcement:</strong> Rebar installation, mesh laying</li>
                <li><strong>Fabrication:</strong> Custom steel structures</li>
                <li><strong>Installation:</strong> Welding, bolting, erection</li>
            </ul>
            
            <h3>Quality Standards:</h3>
            <ul>
                <li>✓ High-grade steel materials</li>
                <li>✓ Certified welders</li>
                <li>✓ Structural engineering support</li>
                <li>✓ Safety compliance</li>
                <li>✓ Quality testing</li>
            </ul>
        `
    },
    plastering: {
        title: "Plastering Works",
        content: `
            <h3>Professional Plastering Services</h3>
            <p>Expert plastering services for smooth, durable, and attractive wall finishes.</p>
            
            <h3>Plastering Services:</h3>
            <ul>
                <li><strong>Internal Plastering:</strong> Smooth finish for painting</li>
                <li><strong>External Plastering:</strong> Weather-resistant coatings</li>
                <li><strong>Decorative Plaster:</strong> Textured and artistic finishes</li>
                <li><strong>Repair Work:</strong> Crack filling, surface restoration</li>
            </ul>
            
            <h3>Professional Benefits:</h3>
            <ul>
                <li>✓ Smooth, even surfaces</li>
                <li>✓ Moisture resistance</li>
                <li>✓ Crack-free finish</li>
                <li>✓ Fast drying time</li>
                <li>✓ Long-lasting results</li>
            </ul>
        `
    },
    cleaning: {
        title: "Cleaning Services",
        content: `
            <h3>Professional Cleaning Services</h3>
            <p>Comprehensive cleaning services for construction sites and completed projects.</p>
            
            <h3>Cleaning Services:</h3>
            <ul>
                <li><strong>Post-Construction:</strong> Debris removal, deep cleaning</li>
                <li><strong>Window Cleaning:</strong> Interior and exterior windows</li>
                <li><strong>Maintenance Cleaning:</strong> Regular upkeep services</li>
                <li><strong>Specialized Cleaning:</strong> Pressure washing, facade cleaning</li>
            </ul>
            
            <h3>Service Features:</h3>
            <ul>
                <li>✓ Eco-friendly products</li>
                <li>✓ Trained cleaning staff</li>
                <li>✓ Modern equipment</li>
                <li>✓ Flexible scheduling</li>
                <li>✓ Satisfaction guarantee</li>
            </ul>
        `
    }
};

// Professional Modal Functions
function openServiceModal(serviceKey) {
    const modal = document.getElementById('serviceModal');
    const titleElement = document.getElementById('serviceModalTitle');
    const bodyElement = document.getElementById('serviceModalBody');
    
    if (serviceDetails[serviceKey]) {
        titleElement.textContent = serviceDetails[serviceKey].title;
        bodyElement.innerHTML = serviceDetails[serviceKey].content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function openBookingModal(preSelectedService = '') {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Pre-select service if provided
    if (preSelectedService) {
        const serviceSelect = document.getElementById('serviceType');
        serviceSelect.value = preSelectedService;
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const serviceModal = document.getElementById('serviceModal');
    const bookingModal = document.getElementById('bookingModal');
    
    if (event.target === serviceModal) {
        closeServiceModal();
    }
    if (event.target === bookingModal) {
        closeBookingModal();
    }
});

// Professional Booking Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(this);
            const bookingData = {};
            for (let [key, value] of formData.entries()) {
                bookingData[key] = value;
            }
            
            // Validate required fields
            const requiredFields = ['clientName', 'clientEmail', 'clientPhone', 'serviceType'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!bookingData[field]) {
                    isValid = false;
                    document.getElementById(field).style.borderColor = '#dc3545';
                } else {
                    document.getElementById(field).style.borderColor = '#ddd';
                }
            });
            
            if (!document.getElementById('terms').checked) {
                isValid = false;
                alert('Please accept the terms and conditions');
                return;
            }
            
            if (!isValid) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Show success message
            showBookingSuccess(bookingData);
        });
    }
});

function showBookingSuccess(bookingData) {
    const modalBody = document.querySelector('#bookingModal .modal-body');
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
            <div style="background: #28a745; color: white; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px; font-size: 40px;">
                ✓
            </div>
            <h3 style="color: #28a745; margin-bottom: 20px;">Booking Request Submitted Successfully!</h3>
            <p style="margin-bottom: 20px; line-height: 1.6;">
                Thank you, <strong>${bookingData.clientName}</strong>! We have received your booking request for <strong>${bookingData.serviceType}</strong>.
            </p>
            <p style="margin-bottom: 30px; color: #666;">
                Our team will contact you within 24 hours to discuss your project requirements and provide a detailed quote.
            </p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h4 style="color: #8B1538; margin-bottom: 15px;">What happens next?</h4>
                <ul style="text-align: left; color: #666; line-height: 1.8;">
                    <li>📞 Our project manager will call you</li>
                    <li>📋 We'll discuss your specific requirements</li>
                    <li>💰 You'll receive a detailed quote</li>
                    <li>📅 We'll schedule a convenient time to start</li>
                </ul>
            </div>
            <button onclick="closeBookingModal(); resetBookingForm();" class="cta-btn">Close</button>
        </div>
    `;
}

function resetBookingForm() {
    const form = document.getElementById('bookingForm');
    if (form) {
        form.reset();
        // Reset the modal content back to the form
        setTimeout(() => {
            location.reload(); // Simple reset - in a real app you'd rebuild the form
        }, 500);
    }
}
