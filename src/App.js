import React, { Component } from 'react';
import AncaPicture from "./Anca.jpg";
import RaduPicture from "./Radu.jpg";
import CatalinPicture from "./Catalin.jpg";
import DanielPicture from "./Daniel.jpg";
import PaulPicture from "./Paul.jpg";
import studentPicture from "./student.png";
import cfr from "./cfr.png";
import mersulTrenurilor from "./mersulTrenurilor.png";
import softrans from "./softrans.png";
import metrics from "./metrics.jpg";
import revenueStreams from "./revenueStreams.png";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">

        <div className="app-header">
          <div className="app-title"><label className="size-75 bold-text white">JustBookIt.</label></div>
        </div>

        <div>

          <div className="team-container gray">
            <div><label className="size-30 bold-text">Meet the team</label></div>
            <div className="team-members">
              <div className="team-member">
                  <div><img className="profile-picture" src={AncaPicture} alt=""/></div>
                  <label className="team-member-name bold-text">Anca-Gabriela Stan</label>
                  <label className="team-member-first-role">UX/UI Designer</label>
                  <label className="team-member-second-role">Frontend Software Developer</label>
                  <label>ancagabriela.stan31@gmail.com</label>
              </div>
              <div className="team-member">
                  <div><img className="profile-picture" src={RaduPicture} alt=""/></div>
                  <label className="team-member-name bold-text">Radu Daniel Cojocaru</label>
                  <label className="team-member-first-role">Technical Lead</label>
                  <label className="team-member-second-role">Backend Software Developer</label>
                  <label>radudanielcojocaru@gmail.com</label>
              </div>
              <div className="team-member">
                  <div><img className="profile-picture" src={DanielPicture} alt=""/></div>
                  <label className="team-member-name bold-text">Daniel Chirana</label>
                  <label className="team-member-first-role">Product Owner</label>
                  <label className="team-member-second-role">Product Manager</label>
                  <label>daniel.chir95@gmail.com</label>
              </div>
              <div className="team-member">
                  <div><img className="profile-picture" src={CatalinPicture} alt=""/></div>
                  <label className="team-member-name bold-text">Stefan-Catalin Jitea</label>
                  <label className="team-member-first-role">Technical Analyst</label>
                  <label className="team-member-second-role">Backend Software Developer</label>
                  <label>catalinjitea@gmail.com</label>
              </div>
              <div className="team-member">
                  <div><img className="profile-picture" src={PaulPicture} alt=""/></div>
                  <label className="team-member-name bold-text">Paul Emiliam Sterpu</label>
                  <label className="team-member-first-role">Business Analyst</label>
                  <label  className="team-member-second-role">Frontend Software Developer</label>
                  <label>paulsterpu@gmail.com</label>
              </div>
            </div>
          </div>

          <div className="blue-container size-16 white">
            <div className="section-title"><label className="size-30 bold-text">Problem</label></div>
            <div className="section-content">
              <p>Nowadays, a very frequent problem that many students from our country are dealing with at a weekly basis
                is the problem of purchasing free train tickets. At first glance, the process seems to be simple. 
                The only thing they have to do is to go to a railway station' ticket office, to show the id card and
                the student id received from their university which proves that they are enrolled in the current year
                at a university and they should be good to go.
              </p>

              <p>The real problem is the endless queues that form at the railway stations' ticket offices. In average a student
                must wait at least 30 minutes in order to receive a ticket, which is very unpleasant, especially when they
                find themselves in a hurry.
              </p>

              <p>At the railway stations there are automatic purchasing machines where people can buy tickets, but students cannot
                take advantage of their free tickets rights when using these, because the purchasing machines do not have
                a functionality for student tickets.
              </p>
            </div>
          </div>

          <div className="gray-container size-16 gray">
            <label className="size-30 bold-text">Solution</label>
            <div className="section-content">
              <p>Our solution aims to offer a web platform where students can book free train tickets,
                eliminating the frustrating waiting at the railway stations' ticket offices. Also,
                we want to significantly reduce the time that they spend to purchase a train ticket.
                Our raw functionalities include the following:
              </p>

              <div className="solutions-container">
                <div className="solution-content">
                  <i className="fas fa-users"></i>
                  <label className="solution-label">allowing users to create an account and register their personal data in order
                    to reserve tickets in only few minutes</label>
                </div>

                <div className="solution-content">
                  <i className="fas fa-subway"></i>
                  <label className="solution-label">choose the source and destination of their travel to find the proper routes from all
                  the companies available on our platform</label>
                </div>

                <div className="solution-content">
                  <i className="fas fa-ticket-alt"></i>
                  <label className="solution-label">instantly receive an email or a sms with the purchased ticket</label>
                </div>
              </div>

              <p>Of course, a validation mechanism that must decide if an user is for real a
                student or not will be implemented. For the moment we will entrust in the train personnel to verify
                if the data marked on the ticket is the same with the data on the traveller’s personal id card.
                In addition to this, we can associate in our database this pair: CNP - student card id.
              </p>
            </div>
          </div>

          <div className="blue-container size-16 white">
            <div className="section-title"><label className="size-30 bold-text">Customer segments</label></div>
            <div className="customer-body">
              <img className="customer-picture" src={studentPicture} alt=""/>
              <div className="section-content">
                <p>
                  The main customers segment that we are targeting are students. We want to offer them the
                  possibility to purchase a train ticket in just few clicks. 
                  So, for the moment, the ones who will benefit from our services will be them, due to
                  the fact that they do not have access to an online platform that allows them to book
                  free train tickets.
                </p>

                <p>
                  As a further development, we can think about extending to another customer categories like:
                  public and private railway companies which want to integrate in their platform our solution,
                  including payment methods as well.
                </p>
              </div>
            </div>
          </div>

          <div className="gray-container size-16 gray">
            <label className="size-30 bold-text">Competition</label>
            
            <div className="competitors-container">
              <div className="competitor-container">
                <div><img className="competitor-logo" src={mersulTrenurilor} alt=""/></div>
                <p>This web platform provides a list of trains companies and it lists all
                  the routes found for the selected source and destination
                </p>
                <p>It offers information about the prices for all categories</p>
                <p>To purchase, it redirects you to the selected company website
                  where the customer can perform a reservation
                </p>
              </div>

              <div className="competitor-container">
                <div><img className="competitor-logo" src={cfr} alt=""/></div>
                <p>'CFR Calatori' encapsulated in their information platform a system
                  for tickets purchasing, too</p>
                <p>To purchase a ticket the traveller should create an account</p>
                <p>The travellers can buy tickets at full price and only the pupils
                  receive a discount
                </p>
              </div>

              <div className="competitor-container">
                <div><img className="competitor-logo" src={softrans} alt=""/></div>
                <p>'Softrans' is a private company, which also created a dedicated protal
                  for ticketing purchasing</p>
                <p>On this platform, the travellers can book their seats online and pay
                  the ticket in the train</p>
                <p>Students are required only to show their reservation confirmation and
                  to prove that they are studying at an university
                </p>
              </div>
            </div>
          </div>

          <div className="gray-container size-16 gray">
            <label className="size-30 bold-text">Our advantages over the competition</label>
            <div className="our-advantages-container">
              <p></p>
              <p>Analyzing the aforementioned 'Softrans' example, it is common that many people would book seats
                and proceed to not showing up when the train is set to leave. We took in consideration the 
                people who are practicing this non-ethical activity, by stopping the user in cause to use our
                platform, unless a small compensation is paid. Of course, if the user cancels the reservation
                before in due time, the penalty will not pe applied. The train personnel will send us a list of
                people who travelled in every train in order to see which reservation were truly honored.
              </p>

              <p>
                Our web platform can be accessed from multiple devices: smartphone, tablet or laptop.
              </p>

              <p>The main goal of our application is to reduce the time spent by the students when they want
                to purchase a train ticket. So the main advantage of our application is that they can use it
                to book train tickets with discount in just few minutes.
              </p>

              <p>
                The other platforms contains multiple information. Our platform is a dedicated one for the
                purchasing train tickets. So, it has a simple design, it is user-frendly and intuitive.
                The user can buy a ticket in just few clicks.
              </p>

              <p>Altough 'Mersul trenurilor' provides a great variaty of routes, it does not provide an option to
                make a reserveration for any of this routes. Our platform has access to each train company database
                that has routes on our site, therefore we can perform a reservation directly on our site.
              </p>
            </div>
          </div>

          <div className="blue-container size-16 white">
            <div className="section-title"><label className="size-30 bold-text">Key metrics</label></div>
            <div className="customer-body">
              <div className="metrics-content">
                <p className="p-custom">We expect a very high number of users at a weekly basis, so the main
                  metric we will use for analyzing the behaviour of our application is this number.
                  Knowing it, we will be able to manage our resources in order to offer a robust application
                  and avoid upsetting our customers. Due to the fact that students tend to travel more in the
                  weekend, we can shrink the interval only to Friday, Saturday and Sunday.
                </p>
              </div>
              <div><img className="metrics-picture" src={metrics} alt=""/></div>
            </div>
          </div>

          <div className="gray-container size-16 gray">
            <div className="section-title"><label className="size-30 bold-text white">Cost structure</label></div>
          </div>

          <div className="gray-container size-16 gray">
            <label className="size-30 bold-text">Revenue streams</label>
            <div className="customer-body">
              <div><img className="revenue-streams-picture" src={revenueStreams} alt=""/></div>
              <div className="customer-content revenue-streams-text">
                <p>
                  We will charge the benefiting companies by gaining a small percentage of their incomes.
                </p>
                <p>
                  Also, any train company that wants to give its student customers to posibility to make
                  online reservation must pay in order to integrate our services.
                </p>
              </div>
            </div>
          </div>

          <div className="blue-container">
          </div>

        </div>

      </div>
    );
  }
}

export default App;