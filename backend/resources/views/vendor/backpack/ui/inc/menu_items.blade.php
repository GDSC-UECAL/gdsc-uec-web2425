{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<x-backpack::menu-item title="Carousels" icon="la la-question" :link="backpack_url('carousel')" />
<x-backpack::menu-item title="Departments" icon="la la-question" :link="backpack_url('department')" />
<x-backpack::menu-item title="Events" icon="la la-question" :link="backpack_url('events')" />
<x-backpack::menu-item title="Partners" icon="la la-question" :link="backpack_url('partners')" />
<x-backpack::menu-item title="Products" icon="la la-question" :link="backpack_url('products')" />
<x-backpack::menu-item title="Teams" icon="la la-question" :link="backpack_url('teams')" />
<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" />
<x-backpack::menu-item title="Speakers" icon="la la-question" :link="backpack_url('speakers')" />
<x-backpack::menu-item title="Merchandises" icon="la la-question" :link="backpack_url('merchandises')" />