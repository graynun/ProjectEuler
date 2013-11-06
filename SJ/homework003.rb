# tree를 만들고 탐색하기
class Tree

	attr_reader :root, :length

	def initialize
		@length = 0
		@root = Node.new_tree(self)
	end

	def increase_length
		@length += 1
	end

	def decrease_length
		@length -= 1
	end

	def search(by, key)
		routes = []
		result = if @root.send(by.to_sym) == key
			@root
		else
			children_search(@root, by, key, routes)
		end

		# p routes
		result
	
	end

	def children_search(node, by, key, routes)
		node.children.each do |n|
			routes << n
		
			return n if n.send(by.to_sym) == key
			if n.have_children?
				children_search(n, by, key, routes)
			end
		end
		nil
	end

	class Children < Array
		def initialize(parent)
			@parent = parent
		end

		def add(value=nil)
			node = Node.new(value, @parent)
			@value = value
			@index = @parent.index
			self << node
		end
	end

	class Node 	
		attr_accessor :index, :value, :children, :parent

		def self.new_tree(tree)
			@@tree = tree
			return new(nil, tree)
		end

		def initialize(value, parent)
			@index = @@tree.increase_length
			@value = value
			@parent = parent
			
			@children = Children.new(self)
		end

		def have_children?
			@children.length > 0
		end
	end
end

tree = Tree.new
tree.root.value = "first"
tree.root.children.add("kkk")
p tree.search(:index, 1)


