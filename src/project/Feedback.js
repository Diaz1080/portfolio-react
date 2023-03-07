import "./Feedback.scss";

const Feedback = () => {
    return (
        <div className="container " id="feedback">
      <section id="row-1">
        <h2>30 Second Feedback</h2>
        <hr />
      </section>
      <section>
        <p>What is your name?</p>
        <p>You can leave this black if you'd like to stay anonymous</p>
        <input type="text" placeholder="Your Name" id="text" />
      </section>
      <section>
        <p>How well did you get the topics tonight?</p>
        <div className="row" id="row-4">
          <div className="col"></div>
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
          <div className="col"></div>
        </div>
        <div className="row" id="row-5">
          <div className="col">Terrible</div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">Excellent</div>
        </div>
      </section>
      <section>
        <p>How would you rate the teacher tonight?</p>
        <div className="row" id="row-4">
          <div className="col"></div>
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
          <div className="col">4</div>
          <div className="col">5</div>
          <div className="col"></div>
        </div>
        <div className="row" id="row-5">
          <div className="col">Terrible</div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">
            <input type="radio" />
          </div>
          <div className="col">Excellent</div>
        </div>
      </section>
      <section>
        <div className="row" id="row-6">
          <p>How was the speed of class tonight?</p>
        </div>
        <div className="row" id="row-7">
          <label><input type="radio" /> Sloth </label>
        </div>
        <div className="row" id="row-8">
          <label><input type="radio" /> Too slow </label>
        </div>
        <div className="row" id="row-7">
          <label><input type="radio" /> Just Right</label>
        </div>
        <div className="row" id="row-8">
          <label><input type="radio" /> Too Fast </label>
        </div>
        <div className="row" id="row-9">
          <label><input type="radio" /> Road Runner </label>
        </div>
      </section>
      <section>
        <div className="row">
          <p>Any notes for our awesome instructor?</p>
        </div>
        <div className="row">
          <input type="text" placeholder="Your Name" id="yourAnswer" />
        </div>
      </section>
      <div className="row">
        <div className="col-6">
          <input type="submit" value="Submit Form" id="submit" />
        </div>
        <div className="col-6 text-end">
          <input type="submit" value="Clear Form" id="clearForm" />
        </div>
      </div>
    </div>
    );
};

export default Feedback;