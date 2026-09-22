<div class="container">
    <div class="ui-card">
      <h2 class="card-title">Sign In</h2>
      <form onsubmit="event.preventDefault();">
        <div class="form-group">
          <label id="username-label" for="username">Username or Email</label>
          <input type="text" id="username" name="username" aria-labelledby="username-label" required autocomplete="username" />
        </div>
        <div class="form-group">
          <label id="password-label" for="password">Password</label>
          <input type="password" id="password" name="password" aria-labelledby="password-label" required autocomplete="current-password" />
        </div>
        <button type="submit" class="btn">Sign In</button>
      </form>
    </div>
  </div>