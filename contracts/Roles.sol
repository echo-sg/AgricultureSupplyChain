pragma solidity >=0.4.24;

/**
 * @title Roles
 * @dev Library for managing addresses assigned to a Role.
 */
library Roles {
  struct Role {
    mapping (address => bool) bearer;
  }

  function add(Role storage role, address account) internal {
    require(account != address(0), "verify account");
    require(!has(role, account), "verify account has the role");

    role.bearer[account] = true;
  }

  function remove(Role storage role, address account) internal {
    require(account != address(0), "verify account");
    require(has(role, account), "verify account has the role");

    role.bearer[account] = false;
  }
  
  function has(Role storage role, address account)
    internal
    view
    returns (bool)
  {
    require(account != address(0), "Account is not verified");
    return role.bearer[account];
  }
}